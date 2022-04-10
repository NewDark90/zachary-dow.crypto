import { Component, Host, h, EventEmitter, Event, Listen, State, ComponentInterface } from '@stencil/core';
import { sectionConfigs } from "../../env";
import { BlockchainBlockFrameIntersectDetail } from '../blockchain-block/shared';

@Component({
    tag: 'navigation-menu',
    styleUrl: 'navigation-menu.scss',
    shadow: true,
})
export class NavigationMenu implements ComponentInterface
{
    @State() viewingSection?: string;

    @Event({
        eventName: "navigationMenu-goTo",
        bubbles: true,
        composed: true
    })
    goToEmitter: EventEmitter<{sectionName: string}> 

    @Listen("blockchainBlock-frameIntersect", { target: "document" })
    blockIntersectionListener(event: CustomEvent<BlockchainBlockFrameIntersectDetail>) 
    {
        if (event.detail.isInFrame)
        {
            this.viewingSection = event.detail.sectionName;
        }
    }

    componentWillLoad()
    {

    }

    private goTo(sectionName: string): void
    {
        this.goToEmitter.emit({sectionName: sectionName});
    }

    render()
    {
        return (
            <Host>
                {sectionConfigs.map(section => 
                    <a href={`#${section.name}`} 
                        onClick={(e) => {
                            e.preventDefault(); this.goTo(section.name)
                        }}
                        class={{"in-view": this.viewingSection === section.name}}
                        >
                        <span class="menu-icon" innerHTML={section.icon}></span> 
                        {section.name} 
                    </a>
                )}
            </Host>
        );
    }
}
