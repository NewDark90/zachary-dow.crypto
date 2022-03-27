import { Component, Host, h, State, Listen, Prop, ComponentInterface } from '@stencil/core';
import { randomInt, bitList } from '../../util';

@Component({
    tag: 'code-bit',
    styleUrl: 'code-bit.scss',
    shadow: true,
})
export class CodeBit implements ComponentInterface
{
    private animationDelay = randomInt(0, 10);
    private bitState = bitList.newState();

    @Prop() animation: "animate" | "idle" | undefined;

    @State() bit: string = bitList.getBit(this.bitState);

    @Listen("animationiteration")
    animationIteration(_event: AnimationEvent)
    {
        this.bit = bitList.getBit(this.bitState);
    }

    render()
    {
        return (
            <Host class={{"animate": this.animation === "animate" || this.animation === "idle"}} delay={this.animationDelay}>
                { this.bit }
            </Host>
        );
    }

}
