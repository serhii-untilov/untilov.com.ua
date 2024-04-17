import { promises as fs } from 'fs';

let cv: any | undefined;

export async function getCV(): Promise<any> {
    if (!cv) {
        const file = await fs.readFile(process.cwd() + '/data/cv.json', 'utf8');
        cv = JSON.parse(file);
    }
    return cv;
}
