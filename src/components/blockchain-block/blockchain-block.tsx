import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'blockchain-block',
    styleUrl: 'blockchain-block.scss',
    shadow: true,
})
export class BlockchainBlock implements ComponentInterface
{
    @Prop() blockName: string;

    render()
    {
        return (
            <Host>
                <div class="content-wrapper">
                    <slot></slot>
                </div>
            </Host>
        );
    }

}
