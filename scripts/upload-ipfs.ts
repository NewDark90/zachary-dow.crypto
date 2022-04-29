
import { join } from 'path'
import { appendFile } from "fs/promises";
import 'dotenv/config';
import {
    getDirectoryFilePaths,
    writeAllFilesToMFS,
    web3StorageUpload,
    pinataUpload,
    getLocalDesktopHttpClient,
    pathsToIpfsContent
} from "./util";

const pathToBuild = "../www";
const wwwFolder = join(__dirname, pathToBuild);
const mfsSiteFolder = "/zachary-dow.crypto";
const uploadLogFile = join(__dirname, "../uploads.txt");

async function main(): Promise<void>
{
    const allPaths = await getDirectoryFilePaths(wwwFolder);
    const ipfsContent = await pathsToIpfsContent(allPaths);
    const desktopHttpClient = await getLocalDesktopHttpClient();
    const folderStat = await writeAllFilesToMFS(desktopHttpClient, mfsSiteFolder, ipfsContent);

    const cid = folderStat.cid.toString();
    console.log("MFS Write File: Done", cid);

    await appendFile(uploadLogFile,
        JSON.stringify({
            cid: folderStat.cid.toString(),
            uploadedAt: Date.now()
        }) + "\n"
    );

    await pinataUpload(cid);
    console.info("Pinata: Done");

    await web3StorageUpload(mfsSiteFolder, ipfsContent);
    console.info("Web3 Storage: Done");

    console.info("Done");
}

main();
