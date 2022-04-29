import { Resolution } from "@unstoppabledomains/resolution";
import { cryptoSymbol } from 'crypto-symbol'
import { WalletRecord } from "./WalletRecord";

export class ResolutionUtil
{
    private nameLookup = cryptoSymbol({
        "Juno": "JUNO" as const,
        "Cronos": "CRO" as const,
        "Osmosis": "OSMO" as const
    }).nameLookup;

    constructor(
        private resolution: Resolution
    )
    {

    }

    async getWalletRecords(walletDomain: string): Promise<WalletRecord[]>
    {
        const rawRecords = await this.resolution.allNonEmptyRecords(walletDomain);

        const records = Object.entries(rawRecords)
            .filter(([key, _val]) => {
                return key.match(/^crypto\./)
            })
            .map((([key, val]): WalletRecord => {
                const splitKey = key.split(".");
                let ticker = splitKey[1];

                if (splitKey.length >= 3)
                {
                    const record =  {
                        ticker: ticker,
                        name: this.nameLookup(ticker) as string,
                        version: splitKey.length >= 5 ? splitKey[3] : undefined,
                        address: val
                    };
                    return record;
                }
                return null;
            }))
            .filter((record) => record !== null);

        return records;
    }
}

export const resolutionUtil = new ResolutionUtil(new Resolution());
