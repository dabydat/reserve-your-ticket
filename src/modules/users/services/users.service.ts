import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersEntity } from '../entities/user.entity';
import { ResponseManager } from 'src/common/services/response/response-manager.service';
import { IResponseManager } from 'src/common/services/response/interfaces/IResponseManager';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>,
    ) { }

    public async createUser(body: UserDTO): Promise<IResponseManager<UsersEntity>> {
        try {
            body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
            const newUser: UsersEntity = await this.userRepository.save(body);
            return ResponseManager.created('User created successfully', newUser);
        } catch (error) {
            return ResponseManager.internalServerError('Error creating user', error);
        }
    }

    public async findUsers(): Promise<IResponseManager<UsersEntity[]>> {
        try {
            const users: UsersEntity[] = await this.userRepository.find();
            return ResponseManager.success('Users retrieved successfully', users);
        } catch (error) {
            return ResponseManager.internalServerError('Error retrieving users', error);
        }
    }

    public async findUserById(id: number): Promise<IResponseManager<UsersEntity>> {
        try {
            const user: UsersEntity = await this.userRepository.createQueryBuilder('user').where({ id }).getOne();
            if (!user) return ResponseManager.notFound('User not found');
            return ResponseManager.success('User retrieved successfully', user);
        } catch (error) {
            return ResponseManager.internalServerError('Error retrieving user', error);
        }
    }
}