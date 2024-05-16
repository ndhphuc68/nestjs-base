import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { Role } from '../enum/role.enum';
// import { Roles } from './common/roles.decorator';
// import { AuthGuard } from '@nestjs/passport';
// import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { UserViewmodel } from '../modules/user/dto/user.viewmodel';
import { RegisterDto } from './dto/register.dto';
import { ApiResponseDto } from '../core/dto/api.response';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.auth.decorator';

@ApiTags('Api Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() register: RegisterDto,
  ): Promise<ApiResponseDto<UserViewmodel>> {
    try {
      const userView = await this.authService.register(register);
      return new ApiResponseDto<UserViewmodel>(true, userView, 'Success');
    } catch (e) {
      return new ApiResponseDto<UserViewmodel>(false, null, e.message);
    }
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ApiResponseDto<any>> {
    try {
      const userView = await this.authService.login(loginDto);
      return new ApiResponseDto<UserViewmodel>(true, userView, 'Success');
    } catch (e) {
      return new ApiResponseDto<UserViewmodel>(false, null, e.message);
    }
  }
}
