import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { LoginDto } from 'src/modules/user/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService
      .findByEmail(loginDto.email)
      .catch(() => null);
    if (!user) {
      throw new UnauthorizedException('E-mail ou senha incorretos.');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('E-mail ou senha incorretos.');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        preferences: user.preferences,
      },
    };
  }
}
