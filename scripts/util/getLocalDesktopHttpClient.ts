import * as IPFSHTTP from "ipfs-http-client";
import { normalize } from 'path';
import { readFile } from "fs/promises";

export async function getLocalDesktopHttpClient(): Promise<IPFSHTTP.IPFSHTTPClient>
{
    const repoPath = `${process.env.USERPROFILE}/.ipfs`;
    const ipfsConfig = JSON.parse(await (await readFile(normalize(`${ repoPath }/config`))).toString());
    const [_empty, _ipname, ip, _portname, port] = ipfsConfig.Addresses.API.split("/");
    return IPFSHTTP.create({
        url: `http://${ ip }:${ port }/api/v0`
    });
}
