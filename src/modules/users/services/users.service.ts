import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersEntity } from '../entities/user.entity';
import { ResponseManager } from 'src/common/services/response/response-manager.service';
import { IResponseManager } from 'src/common/services/response/interfaces/IResponseManager';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) { }

    public async createUser(body: UserDTO): Promise<IResponseManager<UsersEntity>> {
        try {
            body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
            const newUser: UsersEntity = await this.userRepository.save(body);
            return ResponseManager.created('User created successfully', newUser);
        } catch (error) {
            return ResponseManager.internalServerError('Error retrieving user', error);
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

    public async findUserById(id: string): Promise<IResponseManager<UsersEntity>> {
        try {
            const user: UsersEntity = await this.userRepository.createQueryBuilder('user').where({ id }).getOne();
            if (!user) return ResponseManager.notFound('User not found');
            return ResponseManager.success('User retrieved successfully', user);
        } catch (error) {
            return ResponseManager.internalServerError('Error retrieving user', error);
        }
    }

    // public async findBy({ key, value }: { key: keyof UserDTO; value: any }) {
    //     try {
    //         const user: UsersEntity = await this.userRepository.createQueryBuilder('user').addSelect('user.password').where({ [key]: value }).getOne();
    //         return user;
    //     } catch (error) {

    //     }
    // }

    // public async updateUser(body: UserUpdateDTO,id: string,): Promise<UpdateResult | undefined> {
    //     try {
    //         const user: UpdateResult = await this.userRepository.update(id, body);
    //         if (user.affected === 0) {

    //         }
    //         return user;
    //     } catch (error) {

    //     }
    // }

    // public async deleteUser(id: string): Promise<DeleteResult | undefined> {
    //     try {
    //         const user: DeleteResult = await this.userRepository.delete(id);
    //         if (user.affected === 0) {

    //         }
    //         return user;
    //     } catch (error) {

    //     }
    // }
}