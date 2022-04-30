
import { join } from 'path'
import { appendFile } from "fs/promises";
import 'dotenv/config';
import {
    getDirectoryFilePaths,
    writeAllFilesToMFS,
    web3StorageUpload,
    pinataUpload,
    getLocalDesktopHttpClient,
    pathsToIpfsContent,
    copyFromIpfs
} from "./util";

const pathToBuild = "../www";
const wwwFolder = join(__dirname, pathToBuild);
const mfsSiteFolder = "/zachary-dow-crypto";
const uploadLogFile = join(__dirname, "../uploads.txt");

async function preferLocalUpload()
{
    const allPaths = await getDirectoryFilePaths(wwwFolder);
    const ipfsContent = await pathsToIpfsContent(allPaths);
    const desktopHttpClient = await getLocalDesktopHttpClient();
    const folderStat = await writeAllFilesToMFS(desktopHttpClient, mfsSiteFolder, ipfsContent);

    const cid = folderStat.cid.toString();

    await appendFile(uploadLogFile,
        JSON.stringify({
            cid: folderStat.cid.toString(),
            uploadedAt: Date.now()
        }) + "\n"
    );

    await pinataUpload(cid);

    await web3StorageUpload(mfsSiteFolder, ipfsContent);
}

async function preferWeb3Upload()
{
    const allPaths = await getDirectoryFilePaths(wwwFolder);
    const ipfsContent = await pathsToIpfsContent(allPaths);
    const desktopHttpClient = await getLocalDesktopHttpClient();

    const cid = await web3StorageUpload("", ipfsContent);

    await appendFile(uploadLogFile,
        JSON.stringify({
            cid: cid,
            uploadedAt: Date.now()
        }) + "\n"
    );

    await pinataUpload(cid);

    await copyFromIpfs(desktopHttpClient, mfsSiteFolder, cid);
}

async function main(): Promise<void>
{
    //await preferLocalUpload();
    await preferWeb3Upload();
    console.info("Done");
}

main();
