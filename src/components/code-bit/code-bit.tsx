import { Component, Host, h, State, Listen } from '@stencil/core';
import { randomBit, randomInt } from '../../util';

const rareEmojis = [ "✊", "🤝", "🌎", "🌹", "🕊", "⛓", "❤️", "🖤", "💚", "☮️", "🟥", "⬛️", "🌲", "🏴", "☭" ];

@Component({
    tag: 'code-bit',
    styleUrl: 'code-bit.scss',
    shadow: true,
})
export class CodeBit
{
    private animationDelay = randomInt(0, 10);
    private readonly emojiRarity = 80;

    @State() bit: 0 | 1 | string = randomBit();

    @Listen("animationiteration")
    animationIteration(_event: AnimationEvent)
    {
        const randomResult = randomInt(0, rareEmojis.length * this.emojiRarity);

        if (randomResult < rareEmojis.length)
            this.bit = rareEmojis[randomResult];
        else
            this.bit = (randomResult % 2) as 0 | 1;
    }

    render()
    {
        return (
            <Host bit={this.bit} delay={this.animationDelay}>
                { this.bit }
            </Host>
        );
    }

}
