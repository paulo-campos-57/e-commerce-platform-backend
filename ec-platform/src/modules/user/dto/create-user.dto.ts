import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password!: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  preferences?: string[];

  @IsString()
  @IsOptional()
  @IsEnum(UserRole, {
    message: 'O role deve ser válido: user ou admin',
  })
  role?: string;
}
