import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

/**
 * Configuration options for Cross-Origin Resource Sharing (CORS).
 * 
 * @constant
 * @type {CorsOptions}
 * @property {boolean} origin - Indicates whether the resource can be shared with requesting code from the given origin.
 * @property {string} methods - Specifies the HTTP methods that are allowed when accessing the resource.
 * @property {boolean} credentials - Indicates whether or not the response to the request can be exposed when the credentials flag is true.
 */
export const CORS: CorsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
}