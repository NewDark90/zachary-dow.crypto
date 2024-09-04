import { cryptoSymbol } from 'crypto-symbol'
import { WalletRecord } from "./WalletRecord";

export class ResolutionUtil
{
    private nameLookup = cryptoSymbol({
        "Juno": "JUNO" as const,
        "Cronos": "CRO" as const,
        "Osmosis": "OSMO" as const
    }).nameLookup;

    private rawWalletRecords = {
        "crypto.BAN.address": "ban_15aygkbjgchsorgz7s7uhmfm489kbujru58xsnpb7786uh65ho55qd3ogdpe",
        "crypto.BTC.address": "bc1qtt3jvvgmfvdn509kurf65lyuxe95szldg5ptgv",
        "crypto.CRO.address": "cro199642e4ewvlnuz5tuk5g0c0kej0k08xrg5j54v",
        "crypto.DOT.address": "15Nin4yGgmdhhDktj2mRyHKZmHjb9TgLVA8vFUW6sZ58YRVF",
        "crypto.ETH.address": "0x252b2948e6001595eda3b61c821b479f3ceafb12",
        "crypto.LTC.address": "ltc1q70xlzfzu33cuhfeypp5a6xmsueqyn5aj0hmyfw",
        "crypto.XLM.address": "GC36GHRCQ22OGQEW5DSWKFI6LIHBL7AJ4A2QFF5D3P76O3QWZT6L3LCD",
        "crypto.XMR.address": "4A31boV9AtQYgK4TgFuhqwicpETHANdaYcnJBninBNUCd4SEnhUQjEs3EnUsHAzTXaD19hSuZ8rpbRCEKxYbycAgMjwWoen",
        "crypto.XNO.address": "nano_1dbdzwm4gj35se3kznz1udqrmegaqywnor44t1hejm16grgdwprhgkwoqsto",
        "crypto.XTZ.address": "tz1huext9wtJBzFdUHaFNeAp7gDC4zD9ur78",
        "crypto.ALGO.address": "XEILGG27GB57HEWSL6PO3RBTFKNCBQXUBSMCVI3RCR3JXSACH4UTTKK2WI",
        "crypto.ATOM.address": "cosmos199642e4ewvlnuz5tuk5g0c0kej0k08xrs06dfa",
        "crypto.AVAX.address": "X-avax1tm4ussj98kpm96rafur9e0fh0rty5kye4m2nym",
        "crypto.BEAM.address": "1a6e3988029296a01a603d9c7cb07d6cfb26b84f737f80fe31d8fc1489e341b4850",
        "crypto.DOGE.address": "DMg27R7BD8VnAEEpVgZGLeDfWYzBrvyuh5",
        "crypto.JUNO.address": "juno199642e4ewvlnuz5tuk5g0c0kej0k08xrxaekwp",
        "crypto.OSMO.address": "osmo199642e4ewvlnuz5tuk5g0c0kej0k08xrc5fal0",
        "crypto.PIVX.address": "DDHDCBBRqqePUTAWeNYpTYmaWKyJMbfR3S",
        "crypto.SCRT.address": "secret199642e4ewvlnuz5tuk5g0c0kej0k08xrj2wy5p",
        "crypto.USDC.address": "0x252b2948e6001595eda3b61c821b479f3ceafb12",
        "crypto.MATIC.version.ERC20.address": "0x252b2948e6001595eda3b61c821b479f3ceafb12",
        "crypto.MATIC.version.MATIC.address": "0x252b2948e6001595eda3b61c821b479f3ceafb12"
    };

    constructor(
    )
    {

    }

    async getWalletRecords(): Promise<WalletRecord[]>
    {
        const records = Object.entries(this.rawWalletRecords)
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

export const resolutionUtil = new ResolutionUtil();
