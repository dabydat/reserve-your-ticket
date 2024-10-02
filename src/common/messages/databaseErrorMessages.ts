/**
 * A mapping of PostgreSQL error codes to custom error messages and types.
 * 
 * The `databaseErrorMessages` object provides a way to translate PostgreSQL
 * error codes into more readable and user-friendly error messages and types.
 */
export const databaseErrorMessages = {
    "23505": {
        databaseErrorType: "UNIQUE_CONSTRAINT_VIOLATION",
        databaseErrorMessage: "The value exists in the table."
    },
    "23503": {
        databaseErrorType: "FOREIGN_KEY_CONSTRAINT_VIOLATION",
        databaseErrorMessage: "The foreign key does not correspond to any value.",
    },
    "22P02": {
        databaseErrorType: "INVALID_TEXT_REPRESENTATION",
        databaseErrorMessage: "At least one of the fields has an invalid value. Please check and try again.",
    },
    "23502": {
        databaseErrorType: "NOT_NULL_VIOLATION",
        databaseErrorMessage: "The value cannot be null."
    },
    "42703": {
        databaseErrorType: "ERROR_MISSING_COLUMN_NAME",
        databaseErrorMessage: "The column name is missing."
    },
    "42P01": {
        databaseErrorType: "ERROR_MISSING_TABLE_NAME",
        databaseErrorMessage: "The table name does not exist or is missing."
    },
}