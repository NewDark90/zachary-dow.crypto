import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { insertBetween } from '../../util';

@Component({
    tag: 'content-about',
    styleUrl: 'content-about.scss',
    shadow: true,
})
export class ContentAbout implements ComponentInterface
{

    render()
    {
        const concepts = ["Decentralization", "Digital Commons", "Open Source Collaboration", "Smart Contracts", "DAOs"]
        .map((c) => { 
            return <span class="highlight">{c}</span>;
        });

        return (
            <Host>
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
            </Host>
        );
    }

}
