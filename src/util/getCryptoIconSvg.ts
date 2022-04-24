import { getAssetPath } from "@stencil/core";

export function getCryptoIconSvg(ticker: string, _cacheKey?: string)
{
    if (!ticker)
        return ticker;

    if (ticker === "XNO")
        ticker = "NANO";

    let path = getAssetPath(`../assets/cryptocurrency-icons/svg/color/${ticker.toLowerCase()}.svg`);

    //if (cacheKey)
        //path += `?key=${cacheKey}`

    return path;
}
