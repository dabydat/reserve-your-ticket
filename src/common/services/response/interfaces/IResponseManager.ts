export interface IResponseManager<T> {
    statusCode: number;
    message: string;
    data?: T;
}