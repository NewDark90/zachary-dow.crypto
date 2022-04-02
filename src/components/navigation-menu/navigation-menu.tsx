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
        history.replaceState(undefined, undefined, `#${blockName}`)
    }

    render()
    {
        return (
            <Host>
                {sectionConfigs.map(section =>
                    <a href={`#${section.name}`} onClick={(e) => this.goTo(e, section.name)}>
                        {section.name}
                    </a>
                )}
            </Host>
        );
    }

}
