export interface GunzaFfmpegPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
