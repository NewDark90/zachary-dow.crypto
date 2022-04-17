import { Component, Host, h, ComponentInterface, getAssetPath, State } from '@stencil/core';
import { resolutionUtil, WalletRecord } from "../../cryptocurrency";
import { walletDomain } from '../../env';
import { getCryptoIconSvg } from '../../util';
import { toCanvas } from "qrcode"
import copyIcon from "ionicons/dist/svg/copy-outline.svg";
import closeIcon from "ionicons/dist/svg/close-circle-outline.svg";
import uniqBy from "lodash/uniqBy";

@Component({
    tag: 'content-wallets',
    styleUrls: [
        'content-wallets.scss'
    ],
    shadow: true,
})
export class ContentWallets implements ComponentInterface
{
    private preferredTickers = [
        "XMR", "BEAM", "LTC", "ETH", "XLM", "MATIC", "ATOM"
    ]

    private layer2s = [
        { display: "Loopring", icon: <img src={getCryptoIconSvg("lrc")} /> },
        { display: "Polygon", icon: <img src={getCryptoIconSvg("matic")} /> },
        { display: "Arbitrum", icon: <img src={getAssetPath(`../assets/layer2/arbitrum.svg`)} /> },
    ];

    private qrCanvas?: HTMLCanvasElement = null;

    @State() wallets: {
        preferred: WalletRecord[],
        additional: WalletRecord[]
    } = { preferred: [], additional: [] };

    @State() selectedWallet?: WalletRecord;

    componentWillLoad()
    {
        this.getWallets();
    }

    private async getWallets() 
    { 
        const allWallets = await resolutionUtil.getWalletRecords(walletDomain);
        const newWalletState = { 
            preferred: [] as WalletRecord[], 
            additional: [] as WalletRecord[]
        };

        uniqBy(allWallets, (w) => w.ticker).forEach((wallet) => {
            const isPreferred = this.preferredTickers.some(ticker => wallet.ticker == ticker);

            if (isPreferred)
                newWalletState.preferred.push(wallet);
            else
                newWalletState.additional.push(wallet);
        })

        this.wallets = newWalletState;
    }

    private getTickerImage(ticker: string, cacheKey?: string)
    {
        if (!ticker) return ticker;

        const imgErrorFallbackFn = function (this: HTMLImageElement, _ev) { 
            this.removeEventListener("error", imgErrorFallbackFn); 
            this.style.visibility = "hidden"; 
        };

        const imgErrorMainFn = function (this: HTMLImageElement, _ev) { 
            this.removeEventListener("error", imgErrorMainFn);
            this.addEventListener("error", imgErrorFallbackFn)
            this.src = getAssetPath(`../assets/icon/generic-coin.svg`);
        };

        return <img src={getCryptoIconSvg(ticker, cacheKey)} 
                        onError={imgErrorMainFn} /> 
    }

    private walletElement(wallet: WalletRecord)
    {
        return (
            <div class="icon-badge currency" 
                onClick={() => { 
                    this.selectedWallet = wallet; 
                    toCanvas(this.qrCanvas, this.selectedWallet.address); 
                    }}>
                <div class="icon">
                    { this.getTickerImage(wallet.ticker) }
                </div>
                <span class="display">
                    { wallet.name ?? wallet.ticker } 
                </span>
            </div>
        );
    }

    render()
    {
        return (
            <Host>
                <div class="intro">  
                    Need to pay me for some reason?
                    <br />
                    Most of my wallets will be listed here.
                    <br />
                    For a comprehensive list, check out the addresses listed at:
                    <br />
                    <a href={`https://unstoppabledomains.com/api/v1/resolution/resolve/${walletDomain}`}
                        target="blank" rel="noopener">
                        {walletDomain}
                    </a>
                </div>

                <div>
                    <div>
                        <h4 class="title">
                            Preferred
                        </h4> 
                        <div class="currency-list">
                            {this.wallets.preferred.map((w) => this.walletElement(w))}
                        </div>
                    </div>
                    <div>
                        <h4 class="title">
                            Additional
                        </h4>
                        <div class="currency-list">
                            {this.wallets.additional.map((w) => this.walletElement(w))}
                        </div>
                    </div>
                    <div>
                        <h4 class="title">
                            Ethereum Layer 2s
                        </h4>
                        <div class="l2-list">
                            {
                                this.layer2s.map((l2) => (
                                    <div class="icon-badge l2">
                                        <div class="icon">
                                            {l2.icon}
                                        </div>
                                        <span class="display">
                                            { l2.display }
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <div class={{"address-details": true, "hide": !this.selectedWallet}}>
                    <div>
                        <div class="icon-big">
                            { this.getTickerImage(this.selectedWallet?.ticker, "big") }
                        </div>
                        <h3 class="title">
                            {this.selectedWallet?.name}
                        </h3>
                    </div>
                    <canvas ref={(canvas) => { this.qrCanvas = canvas; }}></canvas>
                    <span class="address">
                        {this.selectedWallet?.address}
                        <button class="copy-button" 
                            innerHTML={copyIcon}
                            onClick={(_e) => {
                                navigator.clipboard.writeText(this.selectedWallet?.address);
                            }}></button>
                    </span>
                    <span class="icon-md close" innerHTML={closeIcon} 
                        onClick={() => { this.selectedWallet = null; }}>
                    </span>
                </div>
            </Host>
        );
    }

}
