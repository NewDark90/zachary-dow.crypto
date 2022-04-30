
import { resolve } from 'path'
import { readdir } from "fs/promises";
import 'dotenv/config';
import { DirectoryPaths } from './DirectoryPaths';


const getFilePaths = async (path: string): Promise<string[]> =>
{
    const dirents = await readdir(path, { withFileTypes: true });
    const files: string[][] = await Promise.all(dirents.map((dirent) =>
    {
        const res = resolve(path, dirent.name);
        return dirent.isDirectory() ? getFilePaths(res) : [res];
    }));
    return files.flat();
}

export async function getDirectoryFilePaths(dir: string): Promise<DirectoryPaths[]>
{
    const files = await getFilePaths(dir);

    return files.map(f =>
    {
        return {
            absolute: f,
            relative: f.replace(dir, "").replace(/\\/g, "/")
        };
    });
}
