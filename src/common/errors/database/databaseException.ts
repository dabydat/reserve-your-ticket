/**
 * A mapping of PostgreSQL error codes to custom error messages and types.
 * 
 * The `databaseErrorMessages` object provides a way to translate PostgreSQL
 * error codes into more readable and user-friendly error messages and types.
 */
const databaseErrorMessages: { [key: string]: { type: string, message: string } } = {
    "23505": {
        type: "UNIQUE_CONSTRAINT_VIOLATION",
        message: "The value exists in the table."
    },
    "23503": {
        type: "FOREIGN_KEY_CONSTRAINT_VIOLATION",
        message: "The foreign key does not correspond to any value.",
    },
    "22P02": {
        type: "INVALID_TEXT_REPRESENTATION",
        message: "At least one of the fields has an invalid value. Please check and try again.",
    },
    "23502": {
        type: "NOT_NULL_VIOLATION",
        message: "The value cannot be null."
    },
    "42703": {
        type: "ERROR_MISSING_COLUMN_NAME",
        message: "The column name is missing."
    },
    "42P01": {
        type: "ERROR_MISSING_TABLE_NAME",
        message: "The table name does not exist or is missing."
    },
};

export class DatabaseError extends Error {
    public code: string;
    public detail?: string;

    constructor(code: string, detail?: string) {
        const errorMessage = databaseErrorMessages[code];
        const message = errorMessage ? errorMessage.message : "Unknown database error";
        super(message);
        this.code = code;
        this.detail = detail;
        this.name = "DatabaseError";
    }

    /**
     * Static method to handle database errors by throwing a DatabaseError.
     * 
     * @param error - The error object containing the error code and details.
     * @throws DatabaseError with a detailed error message.
     */
    public static handleDatabaseError(error: any): void {
        const errorMessage = databaseErrorMessages[error.code];
        if (errorMessage) {
            throw new DatabaseError(error.code, error.detail);
        }
        throw new DatabaseError("UNKNOWN_ERROR", "Unknown database error");
    }
}