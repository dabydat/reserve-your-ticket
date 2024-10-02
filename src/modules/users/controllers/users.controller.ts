import { Controller, Post, Get, Param, Body, Res } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO } from '../dto/user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() body: UserDTO, @Res() res: Response) {
        const response = await this.usersService.createUser(body);
        return res.status(response.statusCode).json(response);
    }

    @Get()
    async findUsers(@Res() res: Response) {
        const response = await this.usersService.findUsers();
        return res.status(response.statusCode).json(response);
    }

    @Get(':id')
    async findUserById(@Param('id') id: number, @Res() res: Response) {
        const response = await this.usersService.findUserById(+id);
        return res.status(response.statusCode).json(response);
    }
}