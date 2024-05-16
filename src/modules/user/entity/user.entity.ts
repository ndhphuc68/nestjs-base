import { BaseEntity } from '../../../core/base/entity/base.entity';
import { Column, Entity } from 'typeorm';
import { AutoMap } from '@automapper/classes';

@Entity({
  name: 'users',
  orderBy: {
    createAt: 'ASC',
  },
})
export class User extends BaseEntity {
  @AutoMap()
  @Column()
  name: string;

  @AutoMap()
  @Column()
  username: string;

  @Column()
  password: string;
}
