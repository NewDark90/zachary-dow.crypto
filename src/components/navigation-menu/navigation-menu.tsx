import { Component, Host, h } from '@stencil/core';
import { blockNames } from "../../env";

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
                {blockNames.map(name =>
                    <a href={`#${name}`} onClick={(e) => this.goTo(e, name)}>
                        {name}
                    </a>
                )}
            </Host>
        );
    }

}
