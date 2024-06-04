import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Welcome Page Dentiva API' })
  @ApiResponse({ status: 200, description: 'return text' })
  getHello(): string {
    return this.appService.getHello();
  }
}
