export interface IRequestData {
  controller?: string;
  method?: string;
  miliseconds?: string;
}

export interface IErrorData {
  statusCode?: number | string;
  message?: string;
  stackTrace?: string;
  timestamp?: string;
  validationError?: string[];
}

export interface ILogMetadata extends IRequestData, IErrorData {
  clientIp?: string;
  url?: string;
}
