import { Component, Host, h } from '@stencil/core';
import { sectionConfigs } from "../../env";

@Component({
    tag: 'navigation-menu',
    styleUrl: 'navigation-menu.scss',
    shadow: true,
})
export class NavigationMenu
{
    private goTo(e: Event, blockName: string): void
    {
        e.preventDefault();
        history.replaceState(undefined, undefined, `#${blockName}`);
        const block = document.body.querySelector(`[section-name='${blockName}']`)
        window.moveTo(0, block.clientTop);
    }

    render()
    {
        return (
            <Host>
                {sectionConfigs.map(section => 
                    <a href={`#${section.name}`} onClick={(e) => this.goTo(e, section.name)}>
                        <span class="menu-icon" innerHTML={section.icon}></span> 
                        {section.name} 
                    </a>
                )}
            </Host>
        );
    }
}
