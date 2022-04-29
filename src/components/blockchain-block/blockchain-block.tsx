import { Component, Host, h, Prop, ComponentInterface, State, Listen, Element, EventEmitter, Event, Watch } from "@stencil/core";
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
    @Prop() animationChoice?: boolean;

    @State() codeCubeAnimationState: CodeCubeAnimationCompleteState = {};
    @State() isInFrame: boolean = false;
    @State() isBarelyInFrame: boolean = false;
    @State() animation?: "idle" | "animate";

    @Event({ eventName: "blockchainBlock-frameIntersect", bubbles: true, composed: true })
    frameIntersectEmitter: EventEmitter<BlockchainBlockFrameIntersectDetail>

    @Listen("navigationMenu-goTo", { target: "document" })
    navigationGoToListener(event: CustomEvent<{sectionName: string}>)
    {
        if (event.detail.sectionName == this.sectionConfig.name)
            this.scrollToSelf();
    }

    private scrollToSelf = () => {
        this.hostElement.scrollIntoView({ block: "center" });
    }

    @Watch("animationChoice")
    animationChoiceWatch()
    {
        if (typeof this.animationChoice === "boolean")
            this.calculateIntersectionState();
    }

    componentWillLoad()
    {
        this.isFullyInFrameObserver.observe(this.hostElement);
        this.isBarelyInFrameObserver.observe(this.hostElement);
    }

    componentDidLoad()
    {
        if (window.location.hash === `#${this.sectionConfig.name}`)
            this.scrollToSelf();

        if (typeof this.animationChoice === "boolean")
            this.calculateIntersectionState();
    }

    calculateIntersectionState()
    {
        if (typeof this.animationChoice !== "boolean")
            return;

        this.frameIntersectEmitter.emit({
            sectionName: this.sectionConfig.name,
            isInFrame: this.isInFrame,
            isBarelyInFrame: this.isBarelyInFrame
        });

        if (this.isInFrame)
        {
            history.replaceState(undefined, undefined, `#${this.sectionConfig.name}`);
        }

        if (this.animationChoice === false)
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
                    this.animationChoice === true &&
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
                    "hide": (!this.codeCubeAnimationState.lockIn && this.animationChoice === true) || this.animationChoice === undefined
                    }}>
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
