import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ where: { username } });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
