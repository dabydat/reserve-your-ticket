import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDTO {
    @ApiProperty({ description: 'First name of the user' })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({ description: 'Middle name of the user', required: false })
    @IsOptional()
    @IsString()
    middleName?: string;

    @ApiProperty({ description: 'Last name of the user' })
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty({ description: 'Second last name of the user', required: false })
    @IsOptional()
    @IsString()
    secondLastName?: string;

    @ApiProperty({ description: 'Age of the user' })
    @IsNotEmpty()
    @IsNumber()
    age: number;

    @ApiProperty({ description: 'Email of the user' })
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({ description: 'Username of the user' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ description: 'Password of the user' })
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UserUpdateDTO {
    @ApiProperty({ description: 'First name of the user', required: false })
    @IsOptional()
    @IsString()
    firstName: string;

    @ApiProperty({ description: 'Middle name of the user', required: false })
    @IsOptional()
    @IsString()
    middleName?: string;

    @ApiProperty({ description: 'Last name of the user', required: false })
    @IsOptional()
    @IsString()
    lastName: string;

    @ApiProperty({ description: 'Second last name of the user', required: false })
    @IsOptional()
    @IsString()
    secondLastName?: string;

    @ApiProperty({ description: 'Age of the user', required: false })
    @IsOptional()
    @IsNumber()
    age: number;

    @ApiProperty({ description: 'Email of the user', required: false })
    @IsOptional()
    @IsString()
    email: string;

    @ApiProperty({ description: 'Username of the user', required: false })
    @IsOptional()
    @IsString()
    username: string;

    @ApiProperty({ description: 'Password of the user', required: false })
    @IsOptional()
    @IsString()
    password: string;
}