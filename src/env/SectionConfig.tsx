import homeIcon from "../../node_modules/ionicons/dist/svg/home-outline.svg";
import aboutIcon from "../../node_modules/ionicons/dist/svg/person-outline.svg";
import contactIcon from "../../node_modules/ionicons/dist/svg/chatbubbles-outline.svg";
import skillsIcon from "../../node_modules/ionicons/dist/svg/construct-outline.svg";
import walletIcon from "../../node_modules/ionicons/dist/svg/wallet-outline.svg";

export interface SectionConfig
{
    name: string;
    icon: string;
}

export const sectionConfigs: SectionConfig[] = [
    {
        name: "home",
        icon: homeIcon,
    },
    {
        name: "about",
        icon: aboutIcon,
    },
    {
        name: "skills",
        icon: skillsIcon,
    },
    {
        name: "contact",
        icon: contactIcon,
    },
    {
        name: "wallets",
        icon: walletIcon,
    }
];
sectionConfigs.forEach((config) => {
    config.icon = window.atob(config.icon.split(/,/)[1]);

    if (config.name === "wallets") 
    {
        const fakeHtmlEl = document.createElement("div");
        fakeHtmlEl.innerHTML = config.icon;
        const svgEl = (fakeHtmlEl.firstChild as SVGElement);
        svgEl.querySelector("path:last-child").setAttribute("fill", "currentColor") 
        
        config.icon = fakeHtmlEl.innerHTML;
    }
    
    return config;
});