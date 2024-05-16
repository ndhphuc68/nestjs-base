import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthPayload } from '../interfaces/auth.payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '123123',
    });
  }

  async validate(payload: AuthPayload) {
    return {
      name: payload.name,
      username: payload.username,
      id: payload.id,
      role: payload.role,
    };
  }
}
