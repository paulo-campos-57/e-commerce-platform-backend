import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export interface IUserRepository {
  createUser(data: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  updateUser(id: string, data: UpdateUserDto): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
}
