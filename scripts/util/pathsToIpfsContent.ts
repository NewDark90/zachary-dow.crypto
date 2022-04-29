import { ToFile, ToDirectory } from 'ipfs-core-types/src/utils';
import { readFile } from "fs/promises";
import { DirectoryPaths } from './DirectoryPaths';

export async function pathsToIpfsContent(paths: DirectoryPaths[])
{
    const ipfsContent: Array<ToFile | ToDirectory> = [];

    for (const file of paths)
    {
        const content = (await readFile(file.absolute));

        ipfsContent.push({
            path: file.relative,
            content: content
        });
    }

    return ipfsContent;
}
