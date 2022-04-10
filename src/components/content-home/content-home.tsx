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
                <slot></slot>
            </Host>
        );
    }

}
