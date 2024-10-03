import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() body: UserDTO, ) {
        return this.usersService.createUser(body);
    }

    @Get()
    findUsers() {
        return this.usersService.findUsers();
    }

    @Get(':id')
    findUserById(@Param('id') id: number) {
        return this.usersService.findUserById(+id);
    }
}