import { Component, Host, h, Prop, ComponentInterface, State, Listen, Element } from "@stencil/core";
import { SectionConfig } from "../../env";
import { CodeCubeAnimationCompleteState } from "../code-cube/shared";

@Component({
    tag: "blockchain-block",
    styleUrl: "blockchain-block.scss",
    shadow: true,
})
export class BlockchainBlock implements ComponentInterface
{
    private isFullyInFrameObserver = new IntersectionObserver(([entry]) => { this.isInFrame = entry.isIntersecting; this.calculateAnimationState(); }, { root: null, threshold: 1, });
    private isBarelyInFrameObserver = new IntersectionObserver(([entry]) => { this.isBarelyInFrame = entry.isIntersecting; this.calculateAnimationState(); }, { root: null, threshold: 0.1, });

    @Element() hostElement: HTMLElement;

    @Prop() sectionConfig: SectionConfig;
    @Prop() position: "left" | "right";

    @State() showAnimation: boolean = false;
    @State() codeCubeAnimationState: CodeCubeAnimationCompleteState = {};
    @State() isInFrame: boolean = false;
    @State() isBarelyInFrame: boolean = false;
    @State() animation?: "idle" | "animate";

    @Listen("acceptAnimationModal-showAnimations", { target: "document" })
    animationChoiceListener(event: CustomEvent<{ choice: boolean }>)
    {
        this.showAnimation = event.detail.choice;
        this.calculateAnimationState();
    }

    componentWillLoad()
    {
        this.isFullyInFrameObserver.observe(this.hostElement);
        this.isBarelyInFrameObserver.observe(this.hostElement);
    }

    calculateAnimationState()
    {
        if (!this.showAnimation)
        {
            this.animation = undefined;
            return;
        }

        if (this.isInFrame)
            this.animation = "animate";
        if (this.isBarelyInFrame && this.animation != "animate")
            this.animation = "idle";
    }

    render()
    {
        return (
            <Host>
                <code-cube
                    animation={ this.animation }
                    class={{ "hide": this.codeCubeAnimationState.contentCoverReveal }}
                    onCodeCube-animationComplete={(e) => {
                        this.codeCubeAnimationState = e.detail;
                    }}
                    ></code-cube>
                <div class={{
                    "content-wrapper": true,
                    "hide": !this.codeCubeAnimationState.lockIn
                    }}>
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
