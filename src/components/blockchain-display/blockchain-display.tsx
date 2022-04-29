import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { sectionConfigs } from '../../env';
import { insertBetween } from '../../util';

@Component({
    tag: 'blockchain-display',
    styleUrl: 'blockchain-display.scss',
    shadow: true,
})
export class BlockchainDisplay implements ComponentInterface
{
    @Prop() animationChoice?: boolean;

    private getContent(key: string)
    {
        if (key == "home")
            return <content-home></content-home>;
        else if (key == "about")
            return <content-about></content-about>;
        else if (key == "skills")
            return <content-skills></content-skills>;
        else if (key == "contact")
            return <content-contact></content-contact>;
        else if (key == "wallets")
            return <content-wallets></content-wallets>;
    }

    render()
    {
        return (
            <Host>
                {
                    insertBetween(
                        sectionConfigs.map(config => {
                            return (
                                <blockchain-block animationChoice={this.animationChoice} section-name={config.name} sectionConfig={config}>
                                    {this.getContent(config.name)}
                                </blockchain-block>
                            )
                        }),
                        (i) => <blockchain-links class={`links-${i}`}></blockchain-links>
                    )

                }
            </Host>
        );
    }

}
