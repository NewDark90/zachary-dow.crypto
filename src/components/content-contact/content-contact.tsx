import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { IconLink } from '../../env';
import mailIcon from "ionicons/dist/svg/mail.svg"
import {
    siGithub,
    siDiscord,
    siTelegram
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
            { name: siDiscord.title, icon: siDiscord.svg, color: siDiscord.hex, href: "https://discord.com/users/231249493603909632"},
            { name: siTelegram.title, icon: siTelegram.svg, color: siTelegram.hex, href: "https://t.me/NewDark90"},
            { name: "Email", icon: mailIcon, color: "FFF", href: "mailto:zach.wellen@gmail.com"},
            { name: siGithub.title, icon: siGithub.svg, color: siGithub.hex, href: "https://github.com/NewDark90"},
        ];
    }

    render()
    {
        return (
            <Host>
                <p><span class="highlight">Need a developer for your project or DAO?</span> If your goals are to help people instead of profiting off of them, there's a very good chance I'll be interested.</p>
                <p>Have something else you care to talk about? <br/> Feel free to reach out.</p>
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
