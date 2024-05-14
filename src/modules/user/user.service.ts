import { Injectable } from '@nestjs/common';
import { BaseAbstractService } from '../../core/base/service/base.abstract.service';
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseAbstractService<User> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }
}
