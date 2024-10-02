/**
 * Enum representing ANSI color codes for log messages.
 * These colors can be used to format console output with different colors.
 * 
 * @enum {string}
 * @property {string} red - Red color code.
 * @property {string} green - Green color code.
 * @property {string} yellow - Yellow color code.
 * @property {string} blue - Blue color code.
 * @property {string} magenta - Magenta color code.
 * @property {string} cyan - Cyan color code.
 * @property {string} pink - Pink color code.
 * @property {string} close - Reset color code to default.
 */
export enum LogColorsEnum {
  red = '\x1b[31m',
  green = '\x1b[32m',
  yellow = '\x1b[33m',
  blue = '\x1b[34m',
  magenta = '\x1b[35m',
  cyan = '\x1b[36m',
  pink = '\x1b[38;5;206m',
  close = '\x1b[0m',
}