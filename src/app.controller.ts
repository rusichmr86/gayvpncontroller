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

  @Get('/naebal')
  @Render('naebal')
  naebal() {
    return { message: 'Hello world2' };
  }

  @Get('/7')
  @Render('7')
  naebal32() {
    return { message: 'Hello world2' };
  }

  @Get('/gayPorn')
  @Render('gayPorn')
  gayPorn() {
    return { message: 'Hello world2' };
  }

  @Get('/212')
  @Render('212')
  gayPorn212() {
    return { message: 'Hello world2' };
  }

  @Get('/9112001')
  @Render('9112001')
  gayPorn9112001() {
    return { message: 'Hello world2' };
  }

  @Get('/09112001')
  @Render('9112001')
  gayPorn19112001() {
    return { message: 'Hello world2' };
  }

  @Get('/norm')
  @Render('norm')
  norm() {
    return { message: 'Hello world2' };
  }

  @Get(
    '/hG2fK8lP0qW4yN7dT5rB1zXG2fK8lP0qW4y6vM9jC30qW4yN7dT5rB1zXG2jC3sJ7tL9oQ2gF8xD6fK8lP0qW4T5rB1zXG2fK8lP0qW4y6vsU0aV4i6vM9jC3sJ7tL9oQ2gF8xD6eR3mZ5kY1pH',
  )
  @Render(
    'hG2fK8lP0qW4yN7dT5rB1zXG2fK8lP0qW4y6vM9jC30qW4yN7dT5rB1zXG2jC3sJ7tL9oQ2gF8xD6fK8lP0qW4T5rB1zXG2fK8lP0qW4y6vsU0aV4i6vM9jC3sJ7tL9oQ2gF8xD6eR3mZ5kY1pH',
  )
  hG2fK8lP0qW4yN7dT5rB1zX6vM9jC3sU0aV4iJ7tL9oQ2gF8xD6eR3mZ5kY1pH() {
    return { message: 'Hello world2' };
  }

  @Get('/hz')
  @Render('hz')
  hz() {
    return { message: 'Hello world2' };
  }

  @Get('/jmi')
  @Render('jmi')
  jmi() {
    return { message: 'Hello world2' };
  }

  @Get('/jmi2')
  @Render('jmi2')
  jmi2() {
    return { message: 'Hello world2' };
  }

  @Get('/jmi3')
  @Render('jmi3')
  jmi3() {
    return { message: 'Hello world2' };
  }

  @Get('/jmi4')
  @Render('jmi4')
  jmi4() {
    return { message: 'Hello world2' };
  }

  @Get('/qr')
  @Render('qr')
  qr() {
    return { message: 'Hello world2' };
  }
}
