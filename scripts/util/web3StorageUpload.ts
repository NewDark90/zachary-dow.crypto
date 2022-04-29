import { ToFile, ToDirectory } from 'ipfs-core-types/src/utils';
import { Web3Storage } from 'web3.storage';
import { Readable } from "stream";

export async function web3StorageUpload(rootFolder: string, ipfsContent: Array<ToFile | ToDirectory>)
{
    const client = new Web3Storage({ token: process.env.WEB3_STORAGE_TOKEN });
    const putContent = ipfsContent.map(entry =>
    {
        return {
            name: `${ rootFolder }${ entry.path }`,
            stream: () => { return Readable.from(entry.content); }
        };
    });
    return await client.put(putContent, { name: rootFolder });
}
