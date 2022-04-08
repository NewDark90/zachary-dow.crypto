import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'blockchain-links',
    styleUrl: 'blockchain-links.scss',
    shadow: true,
})
export class BlockchainLinks
{
    render()
    {
        return (
            <Host>
                <div class="center-break">
                    - &#9939; -
                </div>
            </Host>
        );
    }

}
