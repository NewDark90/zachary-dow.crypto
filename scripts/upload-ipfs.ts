import * as IPFS from 'ipfs-core';
import { Web3Storage } from 'web3.storage';
import {
    resolve,
    join,
//    normalize
} from 'path';
import { readdir, readFile } from "fs/promises";
import { Readable } from "stream";
import 'dotenv/config';

type ImportCandidate = {path: string, content: Buffer};

const pathToBuild = "../www";
//const rootMfsFolder = '/zachary-dow-crypto/www';
//const repoPath = `${process.env.USERPROFILE}/.ipfs`;

async function getFiles(dir: string): Promise<string[]>
{
    const dirents = await readdir(dir, { withFileTypes: true });
    const files: string[][] = await Promise.all(dirents.map((dirent) =>
    {
        const res = resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : [res];
    }));
    return files.flat();
}

async function web3StorageUpload(ipfsContent: ImportCandidate[])
{
    const client = new Web3Storage({ token: process.env.WEB3_STORAGE_TOKEN });
    const putContent = ipfsContent.map(entry => {
        return {
            name: `${entry.path}`,
            stream: () => {
                const readable = Readable.from(entry.content);
                console.log(`Readable-ing : ${entry.path}`);
                return readable;
            }
        }
    });
    return await client.put(putContent);
}
/*
https://github.com/ipfs/ipfs-webui/blob/10f21e9c2fa1ef12e689e3e7c75a276e104b3819/src/bundles/files/actions.js#L396
https://github.com/ipfs/ipfs-webui/blob/10f21e9c2fa1ef12e689e3e7c75a276e104b3819/src/bundles/files/actions.js#L188
try {
    return await ipfs.files.cp(srcPath, dst)
  } finally {
    await store.doFilesFetch()
  }
*/

async function main(): Promise<void>
{
    //const ipfsConfig = JSON.parse(await (await readFile(normalize(`${process.env.USERPROFILE}/.ipfs/config`))).toString());

    const wwwFolder = join(__dirname, pathToBuild);
    const node = await IPFS.create({});

    //await node.files.mkdir(rootIpfsFolder)

    //(undefined as string).split("")

    const allPaths = await getFiles(wwwFolder);
    const ipfsContent: ImportCandidate[] = [];

    //console.info(allPaths);

    for (const file of allPaths)
    {
        const path = file.replace(wwwFolder, "").replace(/\\/g, "/");
        const content = (await readFile(file));

        ipfsContent.push({
            path: path,
            content: content
        });
    }

    const addResult = await node.addAll(ipfsContent, { wrapWithDirectory: true, pin: true });
    for await (const r of addResult) {
        console.info(JSON.stringify(r));
    }

    const web3Cid = await web3StorageUpload(ipfsContent);
    console.log("Web3 CID", web3Cid);

    await Promise.all(
        ipfsContent.map(async ({ path, content }) => {
            return node.files.write(`${path}`, content, { create: true, parents: true,  })
                .then(() => { console.log(`Done: ${path}`); })
        })
    );
    console.log("Done");


    //console.log(await node.files.ls('/www'));

    //console.log(await node.files.ls('/www/build'));

    //const idResult = await node.id()
    //console.info(idResult);
}

main();
