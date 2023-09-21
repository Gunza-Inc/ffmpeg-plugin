import { registerPlugin } from '@capacitor/core';

import type { GunzaFfmpegPlugin } from './definitions';

const GunzaFfmpeg = registerPlugin<GunzaFfmpegPlugin>('GunzaFfmpeg', {
  web: () => import('./web').then(m => new m.GunzaFfmpegWeb()),
});

export * from './definitions';
export { GunzaFfmpeg };
