import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'content-contact',
    styleUrl: 'content-contact.scss',
    shadow: true,
})
export class ContentContact implements ComponentInterface
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
