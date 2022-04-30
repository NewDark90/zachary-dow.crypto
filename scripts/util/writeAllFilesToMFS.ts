import type { IPFS } from 'ipfs-core-types';
import type { ToFile, ToDirectory } from 'ipfs-core-types/src/utils'

export async function writeAllFilesToMFS(node: IPFS, rootFolder: string, ipfsContent: Array<ToFile | ToDirectory>)
{
    try { await node.files.rm(`${rootFolder}`, {recursive: true}); }
    catch (err) { /*Folder might not exist yet and that's ok. */ }

    //try { await node.repo.gc() }
    //catch (err) {  }

    await Promise.all(
        ipfsContent.map(async ({ path, content }) => {
            return node.files.write(
                `${rootFolder}${path}`,
                content,
                {
                    create: true,
                    parents: true,
                    cidVersion: 1,
                    reduceSingleLeafToSelf: true,
                    rawLeaves: true
                }
            ).then(() => { console.log(`Done: ${path}`); })
        })
    );

    const folderStat = await node.files.stat(rootFolder);

    await node.pin.add(folderStat.cid, { recursive: true });

    console.log("writeAllFilesToMFS: Done", folderStat.cid);

    return folderStat;
}
