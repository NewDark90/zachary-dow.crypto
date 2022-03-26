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

    @State() animateCubes: boolean = false;

    render()
    {
        return (
            <Host>
                <button style={{"position": "absolute", "top": "-20px"}} onClick={(e) => { this.animateCubes = true; console.log("click", e)}}>Click me</button>
                <code-cube animate-cube={this.animateCubes} style={{"--pos-x": "1", "--pos-y": "0"}}></code-cube>
                <code-cube animate-cube={this.animateCubes} style={{"--pos-x": "0", "--pos-y": "0" }}></code-cube>
                <code-cube animate-cube={this.animateCubes} style={{"--pos-x": "0", "--pos-y": "1"}}></code-cube>
                <code-cube animate-cube={this.animateCubes} style={{"--pos-x": "1", "--pos-y": "1"}}></code-cube>
                <div class="content-wrapper">
                    <slot></slot>
                </div>
            </Host>
        );
    }

}
