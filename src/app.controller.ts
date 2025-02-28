import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(
    '/birthday/masha/3f7G5jD1oA2Pz9kL8W6nX4bM0cV1tY7qR9eI5hU3jF2sT8bK4rL6nM7z0yQ9dJ7uV1aE2m3f7G5jD1oA2Pz9kL8W6nX4bM0cV1tY7qR9eI5hU3jF2sT8bK4rL6nM7z0yQ9dJ7uV1aE2m3f7G5jD1oA2Pz9kL8W6nX4bM0cV1tY7qR9eI5hU3jF2sT8bK4rL6nM7z0yQ9dJ7uV1aE2m3f7G5jD1oA2Pz9kL8W6nX4bM0cV1tY7qR9eI5hU3jF2sT8bK4rL6nM7z0yQ9dJ7uV1aE2m',
  )
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/dQw4w9WgXcQ')
  @Render('dQw4w9WgXcQ')
  dQw4w9WgXcQ() {
    return { message: 'Hello world2' };
  }
}
