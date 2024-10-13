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
 */
export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    username: string;
    password: string;
}