import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'content-wallets',
    styleUrl: 'content-wallets.scss',
    shadow: true,
})
export class ContentWallets implements ComponentInterface
{

    render()
    {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
