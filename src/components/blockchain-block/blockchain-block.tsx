import { Component, Host, h, Prop, ComponentInterface, State, Listen, Element, EventEmitter, Event } from "@stencil/core";
import { IconLink } from "../../env";
import { BlockchainBlockFrameIntersectDetail } from "./shared";
import { CodeCubeAnimationCompleteState } from "../code-cube/shared";

@Component({
    tag: "blockchain-block",
    styleUrl: "blockchain-block.scss",
    shadow: true,
})
export class BlockchainBlock implements ComponentInterface
{
    private isFullyInFrameObserver = new IntersectionObserver(([entry]) => { 
        this.isInFrame = entry.isIntersecting; 
        this.calculateIntersectionState(); 
    }, { root: null, threshold: 1, });

    private isBarelyInFrameObserver = new IntersectionObserver(([entry]) => { 
        this.isBarelyInFrame = entry.isIntersecting; 
        this.calculateIntersectionState(); 
    }, { root: null, threshold: 0.1, });

    @Element() hostElement: HTMLElement;

    @Prop() sectionConfig: IconLink;

    @State() showAnimation?: boolean = undefined;
    @State() codeCubeAnimationState: CodeCubeAnimationCompleteState = {};
    @State() isInFrame: boolean = false;
    @State() isBarelyInFrame: boolean = false;
    @State() animation?: "idle" | "animate";

    @Event({ eventName: "blockchainBlock-frameIntersect", bubbles: true, composed: true }) 
    frameIntersectEmitter: EventEmitter<BlockchainBlockFrameIntersectDetail>;

    @Listen("acceptAnimationModal-showAnimations", { target: "document" })
    animationChoiceListener(event: CustomEvent<{ choice: boolean }>)
    {
        this.showAnimation = event.detail.choice;
        this.calculateIntersectionState();
    }

    @Listen("navigationMenu-goTo", { target: "document" })
    navigationGoToListener(event: CustomEvent<{sectionName: string}>) 
    {
        console.log(event);
        if (event.detail.sectionName == this.sectionConfig.name)
            this.scrollToSelf();
    }

    private scrollToSelf = () => { 
        this.hostElement.scrollIntoView({ block: "center" });
    }

    componentDidLoad()
    {
        if (window.location.hash === `#${this.sectionConfig.name}`)
            this.scrollToSelf();

        this.isFullyInFrameObserver.observe(this.hostElement);
        this.isBarelyInFrameObserver.observe(this.hostElement);
    }

    calculateIntersectionState()
    {
        this.frameIntersectEmitter.emit({
            sectionName: this.sectionConfig.name,
            isInFrame: this.isInFrame,
            isBarelyInFrame: this.isBarelyInFrame
        });

        if (this.isInFrame)
        {
            history.replaceState(undefined, undefined, `#${this.sectionConfig.name}`);
        }

        if (!this.showAnimation)
        {
            this.animation = undefined;
            return;
        }

        if (this.isInFrame)
        {
            this.animation = "animate";
            history.replaceState(undefined, undefined, `#${this.sectionConfig.name}`);
        }
        if (this.isBarelyInFrame && this.animation != "animate")
            this.animation = "idle";

        if (!this.isBarelyInFrame && !this.isInFrame && this.animation == "idle")
           this.animation = null;
    }

    render()
    {
        return (
            <Host>
                {
                    this.showAnimation && 
                    <code-cube
                        animation={ this.animation }
                        class={{ "hide": this.codeCubeAnimationState.contentCoverReveal }}
                        onCodeCube-animationComplete={(e) => {
                            this.codeCubeAnimationState = e.detail;
                        }}
                        ></code-cube>
                }
                <div class={{
                    "content-wrapper": true,
                    "hide": (!this.codeCubeAnimationState.lockIn && this.showAnimation === true) || this.showAnimation === undefined
                    }}>
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
