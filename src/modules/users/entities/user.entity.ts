import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/config/entities/base.entity';
import { IUser } from 'src/common/interfaces/IUser';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ schema: 'security', name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @ApiProperty({ description: 'First name of the user' })
  @Column()
  firstName: string;

  @ApiProperty({ description: 'Middle name of the user' })
  @Column({ nullable: true })
  middleName?: string;

  @ApiProperty({ description: 'Last name of the user' })
  @Column()
  lastName: string;

  @ApiProperty({ description: 'Second last name of the user' })
  @Column({ nullable: true })
  secondLastName?: string;

  @ApiProperty({ description: 'Age of the user' })
  @Column()
  age: number;

  @ApiProperty({ description: 'Email of the user', uniqueItems: true })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'Username of the user', uniqueItems: true })
  @Column({ unique: true })
  username: string;

  @Exclude()
  @ApiProperty({ description: 'Password of the user', writeOnly: true })
  @Column()
  password: string;
}