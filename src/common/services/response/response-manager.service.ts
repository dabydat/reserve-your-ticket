import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { IResponseManager } from './interfaces/IResponseManager';
import { handleDatabaseError } from 'src/common/utils/error.utils';
import { ResponseManagerEnum } from './enums/ResponseManager.enum';
import { isEmptyObject } from 'src/common/helpers/array.helpers';

@Injectable()
export class ResponseManager {
    public static success<T>(message: string = ResponseManagerEnum.SUCCESS, data: T = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.OK,
            success: true,
            message,
            data,
        };
    }

    public static created<T>(message: string = ResponseManagerEnum.CREATED, data: T = null): IResponseManager<T> {
        return {
            statusCode: HttpStatus.CREATED,
            success: true,
            message,
            data,
        };
    }

    public static badRequest<T>(message: string = ResponseManagerEnum.BAD_REQUEST, error: any = null): never {
        throw new HttpException({
            statusCode: HttpStatus.BAD_REQUEST,
            success: false,
            message,
            error,
        }, HttpStatus.BAD_REQUEST);
    }

    public static unauthorized<T>(message: string = ResponseManagerEnum.UNAUTHORIZED, error: any = null): never {
        throw new HttpException({
            statusCode: HttpStatus.UNAUTHORIZED,
            success: false,
            message,
            error,
        }, HttpStatus.UNAUTHORIZED);
    }

    public static forbidden<T>(message: string = ResponseManagerEnum.FORBIDDEN, error: any = null): never {
        throw new HttpException({
            statusCode: HttpStatus.FORBIDDEN,
            success: false,
            message,
            error,
        }, HttpStatus.FORBIDDEN);
    }

    public static notFound<T>(message: string = ResponseManagerEnum.NOT_FOUND, error: any = null): never {
        throw new HttpException({
            message,
            error,
        }, HttpStatus.NOT_FOUND);
    }

    public static internalServerError<T>(message: string = ResponseManagerEnum.INTERNAL_SERVER_ERROR, error: any = null): never {
        const objectError = handleDatabaseError(error);
        throw new HttpException({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message,
            error: isEmptyObject(objectError) ? error : objectError,
        }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}