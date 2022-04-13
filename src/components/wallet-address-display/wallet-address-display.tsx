import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';
import QRCode from 'qrcode'

@Component({
    tag: 'wallet-address-display',
    styleUrl: 'wallet-address-display.scss',
    shadow: true,
})
export class WalletAddressDisplay implements ComponentInterface
{
    private qrCanvas: HTMLCanvasElement;

    @Prop() currency: string;
    @Prop() walletAddress: string;

    private async buildQrCode() 
    {
        return QRCode.toCanvas(this.qrCanvas, this.walletAddress, { });
    }

    componentDidLoad() 
    {
        this.buildQrCode();
    }

    render()
    {
        return (
            <Host>
                <span class="currency">
                    {/* Currency logo */}
                    {this.currency}
                </span>
                <canvas 
                    class="qr-code" 
                    ref={(el: HTMLCanvasElement) => { this.qrCanvas = el; }}>
                </canvas>
                <span class="wallet">
                    {this.walletAddress}
                </span>
                <span>
                    Copy
                </span>
            </Host>
        );
    }

}
