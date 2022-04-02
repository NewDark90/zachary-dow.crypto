//import homeIcon from "../../node_modules/ionicons/dist/svg/add.svg";

import { h } from "@stencil/core";

const homeIcon = "";

export interface SectionConfig
{
    name: string;
    icon: string;
    content: any;
}

export const sectionConfigs: SectionConfig[] = [
    {
        name: "home",
        icon: homeIcon,
        content: (
            <div>
                <h1>
                    Hi! My name is <span class="highlight">Zachary Dow</span>
                </h1>
                <div class="alias">
                    also known as <span class="highlight">NewDark</span> online.
                </div>
                I am a...
                <ul>
                    <li style={{"--bullet": "💻"}}>
                        Web Developer
                    </li>
                    <li style={{"--bullet": "⛓️"}}>
                        Web3 Enthusiast
                    </li>
                    <li style={{"--bullet": "✊"}}>
                        Humanitarian Environmentalist
                    </li>
                </ul>
            </div>
        ),
    },
    {
        name: "about",
        icon: homeIcon,
        content: "",
    },
    {
        name: "contact",
        icon: homeIcon,
        content: "",
    },
    {
        name: "skills",
        icon: homeIcon,
        content: "",
    },
    {
        name: "wallets",
        icon: homeIcon,
        content: "",
    }
]
