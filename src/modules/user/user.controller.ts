import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Api User')
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(): Promise<any> {
    return await this.userService.save({
      username: 'admin',
      password: '123123',
      name: '1232',
      createAt: new Date(),
      updateAt: new Date(),
    });
  }
}
