import { HttpException, HttpStatus } from '@nestjs/common';

export class ResponseManagerException extends HttpException {
    constructor(response: string | object, status: HttpStatus) {
        super(response, status);
    }

    getResponseManagerException(): any {
        return this.getResponse();
    }

    getErrorResponseManagerException(): any {
        return this.getResponseManagerException().error.response;
    }

    getStatusCodeResponseManagerException(): number {
        return this.getResponseManagerException().error.status;
    }
}