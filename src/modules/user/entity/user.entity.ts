import { BaseEntity } from '../../../core/base/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'users',
  orderBy: {
    createAt: 'ASC',
  },
})
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
