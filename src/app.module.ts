import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VpnModule } from './vpn/vpn.module';
import { MemeModule } from './meme/meme.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    VpnModule,
    MemeModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static', 'memes'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
