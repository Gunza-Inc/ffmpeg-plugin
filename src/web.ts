import { WebPlugin } from '@capacitor/core';

import type { GunzaFfmpegPlugin } from './definitions';

export class GunzaFfmpegWeb extends WebPlugin implements GunzaFfmpegPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
