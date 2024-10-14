import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IUser } from 'src/common/interfaces/IUser';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Edit an existing user' })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'User not found.' })
    editUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
        return this.usersService.editUser(id, updateUserDto);
    }

    @Put(':id/deactivate')
    @ApiOperation({ summary: 'Deactivate an existing user' })
    @ApiResponse({ status: 200, description: 'The user has been successfully deactivated.' })
    @ApiResponse({ status: 404, description: 'User not found.' })
    deactivateUser(@Param('id') id: number): Promise<IUser> {
        return this.usersService.deactivateUser(id);
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    getAllUsers(): Promise<IUser[]> {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a user by ID' })
    @ApiResponse({ status: 200, description: 'Return the user.' })
    @ApiResponse({ status: 404, description: 'User not found.' })
    getUser(@Param('id') id: number): Promise<IUser> {
        return this.usersService.getUserById(id);
    }
}