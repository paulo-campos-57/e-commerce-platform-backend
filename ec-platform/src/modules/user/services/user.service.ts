import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UserRepository } from '../repositories/user-repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

import * as bcrypt from 'bcrypt';
import { IUserService } from '../interfaces/user.service.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hasEmail = await this.userRepository.findByEmail(createUserDto.email);

    if (hasEmail) {
      throw new ConflictException('Email already exists.');
    }
    const saltRounds = Number(this.configService.get('BCRYPT_SALT_ROUNDS')) || 10;

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );

    const userData = {
      ...createUserDto,
      password: hashedPassword,
    };

    return this.userRepository.createUser(userData);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user)
      throw new NotFoundException(`User with email ${email} not found.`);

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException(`User with id ${id} not found.`);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    if (updateUserDto.password) {
      const saltRounds =
        this.configService.get<number>('BCRYPT_SALT_ROUNDS') ?? 10;
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        saltRounds,
      );
    }

    const updatedUser = await this.userRepository.updateUser(id, updateUserDto);
    if (!updatedUser)
      throw new NotFoundException(`User with id ${id} not found.`);

    return updatedUser;
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.userRepository.deleteUser(id);

    if (!deleted) throw new NotFoundException(`User with id ${id} not found.`);

    return deleted;
  }
}
