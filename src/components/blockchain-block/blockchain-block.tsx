import { Component, Host, h, Prop, ComponentInterface, State, Listen, Element,Watch } from "@stencil/core";
import { BlockNames } from "../../env";

@Component({
    tag: "blockchain-block",
    styleUrl: "blockchain-block.scss",
    shadow: true,
})
export class BlockchainBlock implements ComponentInterface
{
    private isInFrameObserver = new IntersectionObserver(([entry]) => { this.isInFrame = entry.isIntersecting; }, { root: null, threshold: 1, });

    @Element() hostElement: HTMLElement;

    @Prop() blockName: BlockNames;
    @Prop() position: "left" | "right";

    @State() showAnimation: boolean = false;
    @State() showContent: boolean = false;
    @State() isInFrame: boolean = false;
    @State() animation?: "idle" | "animate";

    @Listen("acceptAnimationModal-showAnimations", { target: "document" })
    animationChoiceListener(event: CustomEvent<{ choice: boolean }>) 
    {
        console.log(event);
        this.showAnimation = event.detail.choice;
        this.animation = "idle";
        this.calculateAnimationState();
    }

    @Listen("animationend", { })
    animationEndListener(e: AnimationEvent) 
    {  
        console.log(e);
        if (e.animationName === "lockIn")
            this.showContent = true;
    }

    @Watch("isInFrame")
    isInFrameWatch()  { this.calculateAnimationState(); }

    @Watch("showAnimation")
    showAnimationWatch() { this.calculateAnimationState(); }

    componentWillLoad() 
    {
        this.isInFrameObserver.observe(this.hostElement);
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
    }

    render()
    {
        return (
            <Host>
                <code-cube 
                    animation={ this.animation } 
                    class={{ "hide": this.showContent }}
                    onCodeCube-lockedIn={(_e) => { this.showContent = true; }}
                    ></code-cube>
                <div class={{
                    "content-wrapper": true, 
                    "hide": !this.showContent
                    }}>
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
