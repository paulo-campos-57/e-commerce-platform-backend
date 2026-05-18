import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { LoginDto } from 'src/modules/user/dto/login.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(loginDto: LoginDto) {
    const user = await this.userService
      .findByEmail(loginDto.email)
      .catch(() => null);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const { password, ...result } = user;

    return result;
  }
}
