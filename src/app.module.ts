import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VpnModule } from './vpn/vpn.module';

@Module({
  imports: [VpnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
