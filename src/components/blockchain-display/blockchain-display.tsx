import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { IconLink, sectionConfigs } from '../../env';
import { insertBetween } from '../../util';
import { siTypescript } from 'simple-icons/icons';

@Component({
    tag: 'blockchain-display',
    styleUrl: 'blockchain-display.scss',
    shadow: true,
})
export class BlockchainDisplay implements ComponentInterface
{
    private getContent(key: string)
    {
        const cssClass = `block-content block-${key}`;

        if (key == "home")
        {
            return (
                <div class={cssClass}>
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
                                Developer
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
            const concepts = ["Decentralization", "Digital Commons", "Open Source Collaboration", "Smart Contracts", "DAOs"]
                .map((c) => { 
                    return <span class="highlight">{c}</span>;
                });
            
            return <div class={cssClass}>
                <p>
                    I am a <span class="highlight">developer</span> and creator of software. 
                    At the best of times this means automating away mundane or complex labor, facilitating better or easier interaction between people regardless of geography, or creating meaningful user experiences.
                </p>
                <p>
                    In my teens, I was inspired by the games I played. I created many of my own games in my spare time to learn how programming and development worked. 
                    I was completely drawn into the mix of creative and logical challenges, so I set out to make it my career. 
                    I went on to get a Bachelor of Computer Science. Since then, I have worked primarily on web sites, web services, and web servers. 
                </p>
                <p>
                    In discovering cryptocurrency and the Web3 movement around 2021, I knew this was a once in a lifetime opportunity to do something meaningful and shape the future in a positive way.
                    One year later, I quit my traditional developer job in order to learn new skillsets for this frontier development.
                </p>
                <p>
                    { insertBetween(concepts, (i) => i < (concepts.length - 1) ?  ", " : ", and ") } have made me incredibly hopeful and inspired on a fundamental level. 
                    <span class="i"> I am compelled to help build towards the best possible future for the most people</span>. 
                </p>
            </div>;
        }
        else if (key == "skills")
        {
            const skillsets = [
                {
                    display: "Expert",
                    list: [
                        { name: siTypescript.title, icon: siTypescript.svg },
                        { name: siTypescript.title, icon: siTypescript.svg },
                    ]
                }, {
                    display: "Proficient",
                    list: []
                }, {
                    display: "Familiar",
                    list: []
                }, {
                    display: "Learning",
                    list: []
                }
            ] as {display: string, list: IconLink[]}[];

            return <div class={cssClass}>
                { 
                    skillsets.map((skillset) => {
                        return (
                            <section>
                                <h4>{skillset.display}</h4>
                                <div class="skillset">
                                    {skillset.list.map((skill) => {
                                        return (
                                            <div class="skill">
                                                <div class="icon" innerHTML={skill.icon}></div>
                                                <span class="display">{skill.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )
                    }) 
                }
            </div>;
        }
        else if (key == "contact")
        {
            return <div class={cssClass}>Contact</div>;
        }
        else if (key == "wallets")
        {
            return <div class={cssClass}>Wallets</div>;
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
                                <blockchain-block section-name={config.name} sectionConfig={config}>
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
