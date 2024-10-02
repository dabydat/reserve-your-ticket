/**
 * Enum representing different levels of logging.
 * 
 * @enum {string}
 * @property {string} ERROR - Represents an error log level.
 * @property {string} WARNING - Represents a warning log level.
 * @property {string} INFO - Represents an informational log level.
 * @property {string} DEBUG - Represents a debug log level.
 * @property {string} FATAL - Represents a fatal log level.
 * @property {string} TRACE - Represents a trace log level.
 * @property {string} LOG - Represents a general log level.
 */
export enum LogLevelEnum {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEBUG = 'debug',
  FATAL = 'fatal',
  TRACE = 'trace',
  LOG = 'log'
}