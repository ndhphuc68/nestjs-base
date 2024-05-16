import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt.auth.guard';
import { HasRoles } from '../../auth/decorators/has.roles.decorator';
import { Role } from '../../enum/role.enum';
import { RolesGuard } from '../../auth/guards/roles.guard';

@ApiBearerAuth()
@ApiTags('Api User')
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HasRoles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(): Promise<any> {
    return await this.userService.findOneById(1);
  }
}
