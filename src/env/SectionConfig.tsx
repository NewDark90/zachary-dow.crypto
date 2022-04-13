import homeIcon from "ionicons/dist/svg/home-outline.svg";
import aboutIcon from "ionicons/dist/svg/person-outline.svg";
import contactIcon from "ionicons/dist/svg/chatbubbles-outline.svg";
import skillsIcon from "ionicons/dist/svg/construct-outline.svg";
import walletIcon from "ionicons/dist/svg/wallet-outline.svg";
import { IconLink } from ".";


export const sectionConfigs: IconLink[] = [
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