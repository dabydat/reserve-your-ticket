import { databaseErrorMessages } from "../messages/databaseErrorMessages";

/**
 * Handles database error messages by mapping error codes to predefined messages
 * and returning an object with the appropriate message.
 *
 * @param error - The error object containing the error code and details.
 * @returns An object with a detailed error message or an empty object if not a database error.
 */
export function handleDatabaseError(error: any): {} {
    const errorMessage = databaseErrorMessages[error.code];
    if (errorMessage) {
        return {
            ...errorMessage,
            message: error.detail ? error.detail : error.message
        };
    }
    return {};
}