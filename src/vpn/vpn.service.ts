import { Injectable } from '@nestjs/common';

@Injectable()
export class VpnService {
  getXyi(): string {
    return 'xyi';
  }
  tiPidor(): string {
    return 'Ты пидор';
  }
}
