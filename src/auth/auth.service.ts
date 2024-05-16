import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { User } from '../modules/user/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectMapper } from '@automapper/nestjs';
import { UserViewmodel } from '../modules/user/dto/user.viewmodel';
import { createMap, Mapper } from '@automapper/core';
import { AuthPayload } from './interfaces/auth.payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    @InjectMapper()
    private mapper: Mapper,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<UserViewmodel> {
    const userExits: User = await this.usersService.findOne({
      where: { username: registerDto.username },
    });
    if (userExits) {
      throw new BadRequestException('Username exits');
    }
    const saveUser = {
      username: registerDto.username,
      password: await bcrypt.hash(registerDto.password, 10),
      name: registerDto.name,
      createAt: new Date(),
      updateAt: new Date(),
    };
    const user: User = await this.usersService.save(saveUser);
    createMap(this.mapper, User, UserViewmodel);
    return this.mapper.map(user, User, UserViewmodel);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<any> {
    return await bcrypt.compare(password, storePasswordHash);
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.findOne({
      where: { username: loginDto.username },
    });
    const payload: AuthPayload = {
      name: user.name,
      username: user.username,
      id: user.id,
    };

    return { access_token: this.jwtService.sign(payload) };
  }

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ where: { username } });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async authentication(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({
      where: { username: username },
    });
    if (!user) {
      return false;
    }
    const check = await this.comparePassword(password, user.password);

    if (!check) {
      return false;
    }

    return user;
  }
}
