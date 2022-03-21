import { Component, h, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.scss',
    shadow: true,
})
export class AppRoot implements ComponentInterface
{

    render()
    {
        return (
            <Host>
                <header>
                    <navigation-menu></navigation-menu>
                </header>

                <main>
                    <blockchain-display></blockchain-display>
                </main>
            </Host>
        );
    }
}
