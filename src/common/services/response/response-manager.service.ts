import { HttpStatus, Injectable } from '@nestjs/common';
import { IResponseManager } from './interfaces/IResponseManager';
import { handleDatabaseError } from 'src/common/utils/error.utils';
import { ResponseManagerEnum } from './enums/ResponseManager.enum';
import { isEmptyObject } from 'src/common/helpers/array.helpers';

@Injectable()
export class ResponseManager {
    public static success<T>(message: string = ResponseManagerEnum.SUCCESS, data: T = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.OK,
            message,
            data,
        };
    }

    public static created<T>(message: string = ResponseManagerEnum.CREATED, data: T = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.CREATED,
            message,
            data,
        };
    }

    public static badRequest<T>(message: string = ResponseManagerEnum.BAD_REQUEST, error: any = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.BAD_REQUEST,
            message,
            error,
        };
    }

    public static unauthorized<T>(message: string = ResponseManagerEnum.UNAUTHORIZED, error: any = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.UNAUTHORIZED,
            message,
            error,
        };
    }

    public static forbidden<T>(message: string = ResponseManagerEnum.FORBIDDEN, error: any = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.FORBIDDEN,
            message,
            error,
        };
    }

    public static notFound<T>(message: string = ResponseManagerEnum.NOT_FOUND, error: any = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.NOT_FOUND,
            message,
            error,
        };
    }

    public static internalServerError<T>(message: string = ResponseManagerEnum.INTERNAL_SERVER_ERROR, error: any = null): IResponseManager<T> {
        const objectError = handleDatabaseError(error);
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message,
            error: isEmptyObject(objectError) ? error : objectError,
        };
    }
}