import { BaseRepositoryAbstract } from '../../core/base/repository/base.abstract.repository';
import { User } from './entity/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from './interfaces/users.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
