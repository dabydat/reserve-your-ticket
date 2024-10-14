/**
 * Interface representing a user.
 * 
 * @interface IUser
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {number} age - The age of the user.
 * @property {string} email - The email address of the user.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {boolean} isActive - A boolean to identify if a row is active.
 */

export interface IUser {
    first_name: string;
    last_name: string;
    age?: number;
    email: string;
    username: string;
    password: string;
}

/**
 * Interface representing a user DTO.
 * 
 * @interface IUserDto
 * @property {number} id - The id of the user.
 * @property {boolean} is_active - A boolean to identify if a row is active.
 * @property {Date} created_at - The date when the row was created.
 * @property {Date} updated_at - The date when the row was updated.
 * @property {Date} deleted_at - The date when the row was deleted.
 */

export interface IUserDto extends IUser {
    id: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

