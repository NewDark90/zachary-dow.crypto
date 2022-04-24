import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'content-home',
    styleUrl: 'content-home.scss',
    shadow: true,
})
export class ContentHome implements ComponentInterface
{

    render()
    {
        return (
            <Host>
                <h1>
                    Hi! My name is <span class="highlight">Zachary Dow</span>
                    <br/>
                    <span class="alias">
                        also known as <span class="highlight">NewDark</span>.
                    </span>
                </h1>
                <div class="iama">
                    I am a...
                    <ul>
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
            </Host>
        );
    }

}
