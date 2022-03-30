import { Component, Host, h, ComponentInterface, Element, Event, EventEmitter, State } from "@stencil/core";

/** 
 * Don't create a stacking context. z-index/position/etc. Attach directly into body.
 * https://www.npmjs.com/package/dialog-polyfill
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
 */
@Component({
    tag: "accept-animation-modal",
    styleUrl: "accept-animation-modal.scss",
    shadow: false, //dialog-polyfill: It can work when used inside Shadow DOM, but it's not recommended.
})
export class AcceptAnimationModal implements ComponentInterface
{
    @Element() hostElement: HTMLElement;

    @State() show: boolean = true;

    @Event({
        eventName: 'acceptAnimationModal-showAnimations',
        composed: true,
        cancelable: false,
        bubbles: true,
    }) 
    choiceEmitter: EventEmitter<{ choice: boolean }>;

    componentDidLoad()
    {

    }

    showAnimationSelect(choice: boolean)
    {
        this.choiceEmitter.emit({ choice: choice });
        this.show = false;
    }

    render()
    {
        return (
            <Host show-dialog={ this.show }>
                <div class="dialog">
                    <div class="title">
                        Show Animations?
                    </div>
                    {/*<div class="disclaimer"></div>*/ }
                    <div class="button-wrap">
                        <button class="choice no" value="0" onClick={ () => this.showAnimationSelect(false) }>
                            0
                        </button>
                    </div>
                    <div class="button-wrap">
                        <button class="choice yes" value="1" onClick={ () => this.showAnimationSelect(true) }>
                            1
                        </button>
                    </div>
                </div>
            </Host>
        );
    }
}
