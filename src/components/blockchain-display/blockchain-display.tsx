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
    private getContent(key: string)
    {
        if (key == "home")
        {
            return (
                <div class="block-content">
                    <h1>
                        Hi! My name is <span class="highlight">Zachary Dow</span>
                        <br/>
                        <span class="alias">
                            also known as <span class="highlight">NewDark</span>.
                        </span>
                    </h1>
                    <div>
                        I am a...
                        <ul class="iama">
                            <li class="computer">
                                Web Developer
                            </li>
                            <li class="chain">
                                Web3 Enthusiast
                            </li>
                            <li class="fist">
                                Humanitarian
                            </li>
                            <li class="tree">
                                Environmentalist
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
        else if (key == "about")
        {
            return <div class="block-content">About</div>;
        }
        else if (key == "contact")
        {
            return <div class="block-content">Contact</div>;
        }
        else if (key == "skills")
        {
            return <div class="block-content">Skills</div>;
        }
        else if (key == "wallets")
        {
            return <div class="block-content">Wallets</div>;
        }
    }

    render()
    {
        return (
            <Host>
                {
                    insertBetween(
                        sectionConfigs.map(config => {
                            return (
                                <blockchain-block section-name={config.name} section-config={config}>
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
