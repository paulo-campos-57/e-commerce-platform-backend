import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../../auth/services/auth.service';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'Usuário criado com sucesso',
      user: this.userService.create(createUserDto),
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.login(loginDto);

    return {
      message: 'Login realizado com sucesso',
      user,
    };
  }

  @Get()
  findAll() {
    return {
      message: 'Lista de usuários',
      users: this.userService.findAll(),
    };
  }

  @Get('find/:email')
  findByEmail(@Param('email') email: string) {
    return {
      message: 'Usuário encontrado',
      user: this.userService.findByEmail(email),
    };
  }

  @Get('find/:id')
  findById(@Param('id') id: string) {
    return {
      message: 'Usuário encontrado',
      user: this.userService.findById(id),
    };
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      message: 'Usuário atualizado',
      user: this.userService.update(id, updateUserDto),
    };
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return {
      message: 'Usuário deletado',
      user: this.userService.delete(id),
    };
  }
}
