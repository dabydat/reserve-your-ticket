import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { IUserDto } from 'src/common/interfaces/IUser';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDTO } from 'src/common/config/dtos/pagination.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<IUserDto> {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    async editUser(id: number, updateUserDto: UpdateUserDto): Promise<IUserDto> {
        const user = await this.getUserById(id);
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }

    async deactivateUser(id: number): Promise<IUserDto> {
        const user = await this.getUserById(id);
        user.is_active = false;
        return this.userRepository.save(user);
    }

    async getAllUsers(paginationDto: PaginationDTO): Promise<IUserDto[]> {
        const { limit, offset } = paginationDto;
        const users = await this.userRepository.find({ skip: offset, take: limit, });
        return users;
    }

    async getUserById(id: number): Promise<IUserDto> {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }
}