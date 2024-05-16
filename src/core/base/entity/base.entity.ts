import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';

@Entity()
export class BaseEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @AutoMap()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
