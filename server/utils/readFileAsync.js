import { promisify } from 'node:util';
import fs from 'node:fs';

export const readFileAsync = promisify(fs.readFile);