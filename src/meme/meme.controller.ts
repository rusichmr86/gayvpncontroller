import { Controller, Get } from '@nestjs/common';
import { MemeService } from './meme.service';

@Controller('meme')
export class MemeController {
  constructor(private readonly memeService: MemeService) {}
  @Get('/')
  getMem(): string {
    return this.memeService.getMem();
  }
}
