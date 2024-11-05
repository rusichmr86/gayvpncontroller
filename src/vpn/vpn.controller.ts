import { Controller, Get } from '@nestjs/common';
import { VpnService } from './vpn.service';

@Controller('vpn')
export class VpnController {
  constructor(private readonly vpnService: VpnService) {}

  @Get()
  getXyi(): string {
    return this.vpnService.getXyi();
  }
  @Get('/test')
  tiPidor(): string {
    return this.vpnService.tiPidor();
  }
}
