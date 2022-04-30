import { IPFS } from 'ipfs-core-types';



export async function copyFromIpfs(node: IPFS, rootFolder: string, cid: string)
{
    try { await node.files.rm(`${rootFolder}`, {recursive: true}); }
    catch (err) { /*Folder might not exist yet and that's ok. */ }

    console.log(`Copying ${ cid } to ${ rootFolder }`);
    await node.files.cp(`/ipfs/${ cid }`, rootFolder);
    console.log(`Copying Done`);

    await node.pin.add(cid, { recursive: true });
}
