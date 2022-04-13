import { Component, Host, h, ComponentInterface } from '@stencil/core';
import kmd from "cryptocurrency-icons/svg/color/beam.svg";
import { Resolution } from "@unstoppabledomains/resolution";

@Component({
    tag: 'content-wallets',
    styleUrl: 'content-wallets.scss',
    shadow: true,
})
export class ContentWallets implements ComponentInterface
{

    private async getWallets() 
    { 
        const resolution = new Resolution();
        const records = await resolution.allNonEmptyRecords("zachary-dow.wallet");
        console.log(records);
    }

    render()
    {
        this.getWallets();

        return (
            <Host>
                <p>Need to pay me for some reason?<br />Most of my wallets will be listed here.</p>
                <p>  
                    For a comprehensive list, check out the addresses listed at 
                    <a href="https://unstoppabledomains.com/api/v1/resolution/resolve/zachary-dow.wallet"
                        target="blank" rel="noopener">
                        zachary-dow.wallet
                    </a>
                </p>

                <div>
                    <div>
                        <h4>Preferred</h4> 
                        <span innerHTML={kmd}></span>
                    </div>
                    <div>
                        <h4>Additional</h4>
                    </div>
                </div>
            </Host>
        );
    }

}
