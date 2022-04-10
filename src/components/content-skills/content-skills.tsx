import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'content-skills',
    styleUrl: 'content-skills.scss',
    shadow: true,
})
export class ContentSkills implements ComponentInterface
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
