import { Component, Host, h, State, Listen } from '@stencil/core';
import { randomBit, randomInt } from '../../util';


@Component({
    tag: 'code-bit',
    styleUrl: 'code-bit.scss',
    shadow: true,
})
export class CodeBit
{
    private animationDelay = randomInt(0, 10);

    @State() bit: 0 | 1 = randomBit();

    @Listen("animationiteration")
    animationIteration(_event: AnimationEvent)
    {
        this.bit = randomBit();
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
