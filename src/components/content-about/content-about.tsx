import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'content-about',
    styleUrl: 'content-about.scss',
    shadow: true,
})
export class ContentAbout implements ComponentInterface
{

    render()
    {
        return (
            <Host>
                <p>
                    I am a <span class="highlight">developer</span> and creator of software.
                    At the best of times this means automating away mundane or complex labor, facilitating better or easier interaction between people regardless of geography, or creating meaningful user experiences. 
                </p>
                <p>
                    I love the challenge and the triumph that comes with the process of developing software, and being able to flex that creativity in interesting and useful ways.
                </p>
            </Host>
        );
    }

}
