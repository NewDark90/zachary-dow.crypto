import * as IPFSCore from 'ipfs-core';
import * as IPFSHTTP from "ipfs-http-client"
import type { IPFS } from 'ipfs-core-types';
import type { ToFile, ToDirectory } from 'ipfs-core-types/src/utils'

import pinataSDK from "@pinata/sdk";
import { Web3Storage } from 'web3.storage';
import {
    resolve,
    join,
    normalize
} from 'path'
import { readdir, readFile } from "fs/promises";
import { Readable } from "stream";
import 'dotenv/config';

const addAllOptions = {
    wrapWithDirectory: true,
    pin: true
};

//type ImportCandidate = {path: string, content: Buffer};

const pathToBuild = "../www";
const repoPath = `${process.env.USERPROFILE}/.ipfs`;
const wwwFolder = join(__dirname, pathToBuild);
const mfsSiteFolder = "/zachary-dow.crypto";

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

async function writeAllFilesToMFS(node: IPFS, ipfsContent: Array<ToFile | ToDirectory>)
{
    try {
        await node.files.rm(`${mfsSiteFolder}`, {recursive: true});
    }
    catch (err) {
        //Folder might not exist yet and that's ok.
    }

    await Promise.all(
        ipfsContent.map(async ({ path, content }) => {
            return node.files.write(
                `${mfsSiteFolder}${path}`,
                content,
                { create: true, parents: true, cidVersion: 1 }
            ).then(() => { console.log(`Done: ${path}`); })
        })
    );

    const folderStat = await node.files.stat(mfsSiteFolder);

    await node.pin.add(folderStat.cid, { recursive: true });

    return folderStat;
}

async function web3StorageUpload(ipfsContent: Array<ToFile | ToDirectory>)
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

async function getLocalDesktopHttpClient()
{
    const ipfsConfig = JSON.parse(await (await readFile(normalize(`${repoPath}/config`))).toString());
    const [ _empty, _ipname, ip, _portname, port ] = ipfsConfig.Addresses.API.split("/");
    return IPFSHTTP.create({
        url: `http://${ip}:${port}/api/v0`
    });
}

async function localDesktopUpload(cid: string)
{
    const client = await getLocalDesktopHttpClient();

    return client.files.cp(`/ipfs/${cid}`, "/");
}

async function pinataUpload(cid: string)
{
    const client = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

    return client.pinByHash(cid, {
        pinataOptions: {},
        pinataMetadata: {
            name: "zachary-dow.crypto",
            keyvalues: {
                uploaded: new Date().toUTCString()
            }
        } as {name: string, keyvalues: Record<string, string> } as any //pinataMetadata type is currently bad.
    })
}


async function main(): Promise<void>
{
    const node = await IPFSCore.create({});

    //(undefined as string).split("")

    const allPaths = await getFiles(wwwFolder);
    const ipfsContent: Array<ToFile | ToDirectory> = [];

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

    const folderStat = await writeAllFilesToMFS(node, ipfsContent);
    const cid = folderStat.cid.toString();
    console.log("CID from folder", cid, folderStat.cid.toV0().toString(), folderStat.cid.toV1().toString());

    const desktopFolderStat = await writeAllFilesToMFS(await getLocalDesktopHttpClient(), ipfsContent);
    const cidD = desktopFolderStat.cid.toString();
    console.log("CID from desktop", cidD, desktopFolderStat.cid.toV0().toString(), desktopFolderStat.cid.toV1().toString());


    //await localDesktopUpload(cid);
    await pinataUpload(cidD);


    //const addResult = await node.addAll(ipfsContent, addAllOptions);
    //for await (const r of addResult) { console.info("IPFS-JS", r.cid, r.path); }

    //const desktopResult = await localDesktopUpload(ipfsContent);
    //for await (const r of desktopResult) { console.info("Desktop API:", r.cid, r.path); }

    //const pinataResult = await pinataUpload();
    //console.info("Pinata:", JSON.stringify(pinataResult));


    //const web3Cid = await web3StorageUpload(ipfsContent);
    //console.log("Web3 CID", web3Cid);

    /*
    await Promise.all(
        ipfsContent.map(async ({ path, content }) => {
            return node.files.write(`${path}`, content, { create: true, parents: true,  })
                .then(() => { console.log(`Done: ${path}`); })
        })
    );
    */
    console.log("Done");


    //console.log(await node.files.ls('/www'));

    //console.log(await node.files.ls('/www/build'));

    //const idResult = await node.id()
    //console.info(idResult);
}

main();
