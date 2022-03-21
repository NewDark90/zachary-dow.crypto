import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'blockchain-display',
    styleUrl: 'blockchain-display.scss',
    shadow: true,
})
export class BlockchainDisplay implements ComponentInterface
{

    render()
    {
        return (
            <Host>
                <blockchain-block block-name="test1">
                    <div>Content 1</div>
                </blockchain-block>
                <blockchain-block block-name="test2">
                    <div>Content 2</div>
                </blockchain-block>
                <blockchain-block block-name="test3">
                    <div>Content 3</div>
                </blockchain-block>
                <blockchain-block block-name="test4">
                    <div>Content 4</div>
                </blockchain-block>
                <blockchain-block block-name="test5">
                    <div>Content 5</div>
                </blockchain-block>
            </Host>
        );
    }

}
