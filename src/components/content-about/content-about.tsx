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
                <slot></slot>
            </Host>
        );
    }

}
