import { HttpStatus, Injectable } from '@nestjs/common';
import { IResponseManager } from './interfaces/IResponseManager';
import { handleDatabaseError } from 'src/common/utils/error.utils';
import { ResponseManagerEnum } from './enums/ResponseManager.enum';
import { isEmptyObject } from 'src/common/helpers/array.helpers';
import { ResponseManagerException } from './exceptions/response-manager.exception';


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
        throw new ResponseManagerException({ message, error }, HttpStatus.BAD_REQUEST);
    }

    public static unauthorized<T>(message: string = ResponseManagerEnum.UNAUTHORIZED, error: any = null): IResponseManager<T> {
        throw new ResponseManagerException({ message, error }, HttpStatus.UNAUTHORIZED);
    }

    public static forbidden<T>(message: string = ResponseManagerEnum.FORBIDDEN, error: any = null): IResponseManager<T> {
        throw new ResponseManagerException({ message, error }, HttpStatus.FORBIDDEN);
    }

    public static notFound<T>(message: string = ResponseManagerEnum.NOT_FOUND, error: any = null): IResponseManager<T> {
        throw new ResponseManagerException({ }, HttpStatus.NOT_FOUND);
    }

    public static internalServerError<T>(message: string = ResponseManagerEnum.INTERNAL_SERVER_ERROR, error: any = null): IResponseManager<T> {
        const objectError = handleDatabaseError(error);
        throw new ResponseManagerException({ message, error: isEmptyObject(objectError) ? error : objectError }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}