import { Component, Host, h, Prop  } from '@stencil/core';

@Component({
    tag: 'code-cube',
    styleUrl: 'code-cube.scss',
    shadow: true,
})
export class CodeCube
{
    private width: number = 8;
    private height: number = 4;
    @Prop({mutable: true}) animation?: "animate" | "idle";
    @Prop() idleCube: boolean = false;

    private getBitElements()
    {
        return Array.from(
            new Array(this.width * this.height),
            () => {
                return <code-bit animation={this.animation}></code-bit>
            });
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
                <div class="content-cover"></div>
            </Host>
        );
    }

}
