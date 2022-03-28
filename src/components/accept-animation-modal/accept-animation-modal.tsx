import { Component, Host, h, ComponentInterface, Element, Event, EventEmitter } from "@stencil/core";

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

    @Event({
        eventName: 'acceptAnimationModal-test',
        composed: true,
        cancelable: false,
        bubbles: true,
      }) testEvent: EventEmitter<{}>;

    componentDidLoad()
    {

    }

    choice(_choice: boolean)
    {

    }

    render()
    {
        return (
            <Host>
                <div class="dialog">
                    <div class="title">
                        Show Animations?
                    </div>
                    {/*<div class="disclaimer"></div>*/}
                    <div class="button-wrap">
                        <button class="choice no" value="0" onClick={() => this.choice(false)}>
                            0
                        </button>
                    </div>
                    <div class="button-wrap">
                        <button class="choice yes" value="1" onClick={() => this.choice(true)}>
                            1
                        </button>
                    </div>
                </div>
            </Host>
        );
    }
}
