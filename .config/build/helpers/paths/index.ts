import { join } from 'path';

export const root = (...paths: string[]) => join(process.cwd(), ...paths);
export const project = (...paths: string[]) => join(process.cwd(), 'src', ...paths);
export const build = (...paths: string[]) => join(process.cwd(), '.micra', ...paths);
