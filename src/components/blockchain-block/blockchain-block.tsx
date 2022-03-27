import { Component, Host, h, Prop, ComponentInterface, State } from '@stencil/core';
import { BlockNames } from '../../env';

@Component({
    tag: 'blockchain-block',
    styleUrl: 'blockchain-block.scss',
    shadow: true,
})
export class BlockchainBlock implements ComponentInterface
{
    @Prop() blockName: BlockNames;
    @Prop() position: "left" | "right";

    @State() animation?: "idle" | "animate";

    render()
    {
        return (
            <Host>
                <button 
                    style={{"position": "absolute", "top": "-60px"}} 
                    onClick={(_e) => { 
                        this.animation = undefined;
                    }}>Unset</button>
                <button 
                    style={{"position": "absolute", "top": "-40px"}} 
                    onClick={(_e) => { 
                        this.animation = "idle";
                    }}>Idle</button>
                <button 
                    style={{"position": "absolute", "top": "-20px"}} 
                    onClick={(_e) => { 
                        this.animation = "animate";
                    }}>Animate</button>
                <code-cube animation={this.animation} style={{"--pos-x": "0", "--pos-y": "0"}}></code-cube>
                <div class="content-wrapper">
                    <slot></slot>
                </div>
            </Host>
        );
    }

}
