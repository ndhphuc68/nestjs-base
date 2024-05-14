import { BaseRepositoryInterface } from '../../../core/base/repository/base.interface.repository';
import { User } from '../entity/user.entity';

export interface UserRepositoryInterface
  extends BaseRepositoryInterface<User> {}
