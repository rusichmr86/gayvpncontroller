import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as Path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/app/do')
  @Render('index')
  roo2t() {
    return { message: 'Hello world2' };
  }
}
