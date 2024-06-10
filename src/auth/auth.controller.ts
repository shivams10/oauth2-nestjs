import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from 'src/shared/auth/guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'google authentication' };
  }
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }
}
