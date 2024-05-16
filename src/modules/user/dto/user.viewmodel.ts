import { AutoMap } from '@automapper/classes';

export class UserViewmodel {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  username: string;

  @AutoMap()
  createAt: string;

  @AutoMap()
  updateAt: string;
}
