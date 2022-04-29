import { Component, h, ComponentInterface, Host, State } from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.scss',
    shadow: true,
})
export class AppRoot implements ComponentInterface
{

    @State() animationChoice?: boolean;



    render(): any
    {
        return (
            <Host>
                <accept-animation-modal
                    onAcceptAnimationModal-showAnimations={(e) => {
                        this.animationChoice = e.detail.choice;
                    }}>
                </accept-animation-modal>
                <header>
                    <navigation-menu></navigation-menu>
                </header>

                <main>
                    <blockchain-display animationChoice={this.animationChoice}></blockchain-display>
                </main>
            </Host>
        );
    }
}
