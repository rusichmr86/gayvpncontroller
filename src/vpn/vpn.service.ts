import { Injectable } from '@nestjs/common';

@Injectable()
export class VpnService {
  getXyi(): string {
    return 'xyi';
  }
  tiPidor(): string {
    return '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qE5D2jnwCHLPGhHL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }
}
