import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { sectionConfigs } from '../../env';
import { insertBetween } from '../../util';

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
                {
                    insertBetween(
                        sectionConfigs.map(config => {
                            return (
                                <blockchain-block section-config={config}>
                                    {config.content}
                                </blockchain-block>
                            )
                        }),
                        <div class="chain">"Chain"</div>
                    )

                }
            </Host>
        );
    }

}
