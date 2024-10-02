import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Inject } from "@nestjs/common";
import { CustomLogger } from "../logger/custom.logger";
import { ILogMetadata } from "../logger/interfaces/ILogMetadata";


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(@Inject(CustomLogger) private readonly customLogger: CustomLogger) { }
    /**
     * Handles HTTP exceptions thrown during request processing.
     * 
     * @param exception - The caught HttpException instance.
     * @param host - The ArgumentsHost containing request and response objects.
     * 
     * This method extracts the request and response objects from the ArgumentsHost,
     * retrieves the client's IP address, and constructs a JSON response based on the exception.
     * It logs the error details including the client's IP, request URL, and stack trace.
     * Finally, it sends the constructed JSON response with the appropriate HTTP status code.
     */
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const clientIp = this.getClientIp(req);
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const jsonResponse = this.buildResponse(exception)
        this.customLogger.error({ clientIp, url: req.url, ...jsonResponse, stackTrace: exception.stack });
        response.status(status).json(jsonResponse);
    }

    /**
   * Get the client IP address from the request.
   *
   * @param {any} req - the request object
   * @return {string} the client IP address
   */
    getClientIp(req: any): string {
        const xForwardedFor = (req.headers['x-forwarded-for'] || '').split(',').pop() || req.connection.remoteAddress;
        return xForwardedFor.trim();
    }

    /**
     * Builds a response object from an HttpException.
     * 
     * @param exception - The HttpException instance to extract the response from.
     * @returns An object containing the status code, timestamp, and any additional 
     *          metadata from the exception response.
     */
    buildResponse(exception: HttpException): Object {
        const responseException = exception.getResponse();
        let logMetadataException: ILogMetadata = {
            statusCode: exception.getStatus(),
            timestamp: new Date().toISOString(),
        }

        if (typeof responseException === 'object') {
            logMetadataException = { ...logMetadataException, ...responseException }
        }

        return logMetadataException
    }
}