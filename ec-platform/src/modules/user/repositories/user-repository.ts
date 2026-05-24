import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '../interfaces/user-repository.interface';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const user = this.repository.create(data);
    return this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  async updateUser(id: string, data: UpdateUserDto) {
    const user = await this.repository.findOneBy({ id });

    if (!user) return null;

    Object.assign(user, data);
    return this.repository.save(user);
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.repository.findOneBy({ id });

    if (!user) return false;

    await this.repository.remove(user);
    return true;
  }
}
