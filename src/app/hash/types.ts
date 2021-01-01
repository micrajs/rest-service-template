export interface HashConfig {
  salt: number;
}

export type HashEncrypt = (value: string) => string;
export type HashCompare = (value: string, hash: string) => boolean;
