import { Component, Host, h, Prop, Listen, State, Event, EventEmitter  } from '@stencil/core';

@Component({
    tag: 'code-cube',
    styleUrl: 'code-cube.scss',
    shadow: true,
})
export class CodeCube
{
    private width: number = 8;
    private height: number = 4;
    
    @State() animationComplete: boolean = false;

    @Prop({mutable: true}) animation?: "animate" | "idle";
    @Prop() idleCube: boolean = false;

    //While I'd much rather have listened to the animationend further up, AnimationEvents aren't composed. Creating a custom event to compensate
    @Event({
        eventName: 'codeCube-lockedIn',
        composed: true,
        cancelable: false,
        bubbles: true,
    }) 
    lockedInEmitter: EventEmitter<AnimationEvent>;
    

    private getBitElements()
    {
        return Array.from(
            new Array(this.width * this.height),
            () => {
                return <code-bit animation={!this.animationComplete ? this.animation : undefined}></code-bit>
            });
    }

    @Listen("animationend")
    animationEndListener(e: AnimationEvent) 
    { 
        if (e.animationName == "lockIn")
        {
            this.animationComplete = true;
            this.lockedInEmitter.emit(e);
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
                <div class="cube">
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
                <div class={{"content-cover": true, "hide": this.animationComplete}}></div>
            </Host>
        );
    }

}
