import pinataSDK from "@pinata/sdk";
import 'dotenv/config';

export async function pinataUpload(cid: string)
{
    const client = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

    return client.pinByHash(cid, {
        pinataOptions: {},
        pinataMetadata: {
            name: "zachary-dow.crypto",
            keyvalues: {
                uploaded: new Date().toUTCString()
            }
        } as { name: string; keyvalues: Record<string, string>; } as any //pinataMetadata type is currently bad.
    }).then((response) => { console.info("Pinata: Done"); return response;});
}
