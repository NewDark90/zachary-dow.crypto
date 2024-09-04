import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { IconLink } from '../../env';
import mailIcon from "ionicons/dist/svg/mail.svg"
import {
    siGithub,
    siLinkedin
} from "simple-icons/icons";

@Component({
    tag: 'content-contact',
    styleUrl: 'content-contact.scss',
    shadow: true,
})
export class ContentContact implements ComponentInterface
{

    private getContactLinks(): Array<IconLink & {color?: string}>
    {
        return [
            { name: "Email", icon: mailIcon, color: "FFF", href: "mailto:mr.zachary.dow@gmail.com"},
            { name: siGithub.title, icon: siGithub.svg, color: siGithub.hex, href: "https://github.com/NewDark90"},
            { name: siLinkedin.title, icon: siLinkedin.svg, color: siLinkedin.hex, href: "https://www.linkedin.com/in/zachary-dow" }
        ];
    }

    render()
    {
        return (
            <Host>
                <p>Want to get in touch?</p>
                <div class="contact-list">
                    {this.getContactLinks().map(contact => (
                        <div class="contact">
                            <a href={contact.href}>
                                <span class="icon" innerHTML={contact.icon}></span>
                                <span class={"display"}>{contact.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </Host>
        );
    }

}
