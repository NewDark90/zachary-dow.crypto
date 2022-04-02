import { Component, Host, h, Prop, Listen, State, Event, EventEmitter  } from '@stencil/core';
import { KeyframeNames } from '../../env';
import { CodeCubeAnimationCompleteState } from './shared';


@Component({
    tag: 'code-cube',
    styleUrl: 'code-cube.scss',
    shadow: true,
})
export class CodeCube
{
    private width: number = 8;
    private height: number = 4;

    @State() animationComplete: CodeCubeAnimationCompleteState = {
        lockIn: false,
        contentCoverReveal: false
    };

    @Prop({mutable: true}) animation?: "animate" | "idle";
    @Prop() idleCube: boolean = false;

    //While I'd much rather have listened to the animationend further up, AnimationEvents aren't composed. Creating a custom event to compensate
    @Event({
        eventName: 'codeCube-animationComplete',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    animationCompleteEmitter: EventEmitter<CodeCubeAnimationCompleteState>;


    private getBitElements()
    {
        return Array.from(
            new Array(this.width * this.height),
            () => {
                return <code-bit animation={!this.animationComplete.contentCoverReveal ? this.animation : undefined}></code-bit>
            });
    }

    @Listen("animationend")
    animationEndListener(e: AnimationEvent & { animationName: KeyframeNames })
    {
        if (e.animationName == "lockIn" || e.animationName == "contentCoverReveal")
        {
            this.animationComplete = {...this.animationComplete, [e.animationName]: true }
            this.animationCompleteEmitter.emit(this.animationComplete);
        }
    }

    render()
    {
        return (
            <Host style={{
                "--bit-width": `${this.width}`,
                "--bit-height": `${this.height}`
                }}
                class={{
                    [this.animation]: this.animation ? true : false,
                }}
                >
                <div class={{"cube": true, "hide": this.animationComplete.lockIn  }}>
                    <div class="face front">
                        {this.getBitElements()}
                    </div>
                    <div class="face back">
                        {this.getBitElements()}
                    </div>
                    <div class="face right">
                        {this.getBitElements()}
                    </div>
                    <div class="face left">
                        {this.getBitElements()}
                    </div>
                    <div class="face top">
                        {this.getBitElements()}
                    </div>
                    <div class="face bottom">
                        {this.getBitElements()}
                    </div>
                </div>
                <div class={{"content-cover": true, "hide": this.animationComplete.contentCoverReveal}}></div>
            </Host>
        );
    }

}
