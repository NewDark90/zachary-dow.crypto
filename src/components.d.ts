/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconLink } from "./env";
import { BlockchainBlockFrameIntersectDetail } from "./components/blockchain-block/shared";
import { CodeCubeAnimationCompleteState } from "./components/code-cube/shared";
export namespace Components {
    interface AcceptAnimationModal {
    }
    interface AppRoot {
    }
    interface BlockchainBlock {
        "animationChoice"?: boolean;
        "sectionConfig": IconLink;
    }
    interface BlockchainDisplay {
        "animationChoice"?: boolean;
    }
    interface BlockchainLinks {
    }
    interface CodeBit {
        "animation": "animate" | "idle" | undefined;
    }
    interface CodeCube {
        "animation"?: "animate" | "idle";
        "idleCube": boolean;
    }
    interface ContentAbout {
    }
    interface ContentContact {
    }
    interface ContentHome {
    }
    interface ContentSkills {
    }
    interface ContentWallets {
    }
    interface NavigationMenu {
    }
    interface WalletAddressDisplay {
        "currency": string;
        "walletAddress": string;
    }
}
declare global {
    interface HTMLAcceptAnimationModalElement extends Components.AcceptAnimationModal, HTMLStencilElement {
    }
    var HTMLAcceptAnimationModalElement: {
        prototype: HTMLAcceptAnimationModalElement;
        new (): HTMLAcceptAnimationModalElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlockchainBlockElement extends Components.BlockchainBlock, HTMLStencilElement {
    }
    var HTMLBlockchainBlockElement: {
        prototype: HTMLBlockchainBlockElement;
        new (): HTMLBlockchainBlockElement;
    };
    interface HTMLBlockchainDisplayElement extends Components.BlockchainDisplay, HTMLStencilElement {
    }
    var HTMLBlockchainDisplayElement: {
        prototype: HTMLBlockchainDisplayElement;
        new (): HTMLBlockchainDisplayElement;
    };
    interface HTMLBlockchainLinksElement extends Components.BlockchainLinks, HTMLStencilElement {
    }
    var HTMLBlockchainLinksElement: {
        prototype: HTMLBlockchainLinksElement;
        new (): HTMLBlockchainLinksElement;
    };
    interface HTMLCodeBitElement extends Components.CodeBit, HTMLStencilElement {
    }
    var HTMLCodeBitElement: {
        prototype: HTMLCodeBitElement;
        new (): HTMLCodeBitElement;
    };
    interface HTMLCodeCubeElement extends Components.CodeCube, HTMLStencilElement {
    }
    var HTMLCodeCubeElement: {
        prototype: HTMLCodeCubeElement;
        new (): HTMLCodeCubeElement;
    };
    interface HTMLContentAboutElement extends Components.ContentAbout, HTMLStencilElement {
    }
    var HTMLContentAboutElement: {
        prototype: HTMLContentAboutElement;
        new (): HTMLContentAboutElement;
    };
    interface HTMLContentContactElement extends Components.ContentContact, HTMLStencilElement {
    }
    var HTMLContentContactElement: {
        prototype: HTMLContentContactElement;
        new (): HTMLContentContactElement;
    };
    interface HTMLContentHomeElement extends Components.ContentHome, HTMLStencilElement {
    }
    var HTMLContentHomeElement: {
        prototype: HTMLContentHomeElement;
        new (): HTMLContentHomeElement;
    };
    interface HTMLContentSkillsElement extends Components.ContentSkills, HTMLStencilElement {
    }
    var HTMLContentSkillsElement: {
        prototype: HTMLContentSkillsElement;
        new (): HTMLContentSkillsElement;
    };
    interface HTMLContentWalletsElement extends Components.ContentWallets, HTMLStencilElement {
    }
    var HTMLContentWalletsElement: {
        prototype: HTMLContentWalletsElement;
        new (): HTMLContentWalletsElement;
    };
    interface HTMLNavigationMenuElement extends Components.NavigationMenu, HTMLStencilElement {
    }
    var HTMLNavigationMenuElement: {
        prototype: HTMLNavigationMenuElement;
        new (): HTMLNavigationMenuElement;
    };
    interface HTMLWalletAddressDisplayElement extends Components.WalletAddressDisplay, HTMLStencilElement {
    }
    var HTMLWalletAddressDisplayElement: {
        prototype: HTMLWalletAddressDisplayElement;
        new (): HTMLWalletAddressDisplayElement;
    };
    interface HTMLElementTagNameMap {
        "accept-animation-modal": HTMLAcceptAnimationModalElement;
        "app-root": HTMLAppRootElement;
        "blockchain-block": HTMLBlockchainBlockElement;
        "blockchain-display": HTMLBlockchainDisplayElement;
        "blockchain-links": HTMLBlockchainLinksElement;
        "code-bit": HTMLCodeBitElement;
        "code-cube": HTMLCodeCubeElement;
        "content-about": HTMLContentAboutElement;
        "content-contact": HTMLContentContactElement;
        "content-home": HTMLContentHomeElement;
        "content-skills": HTMLContentSkillsElement;
        "content-wallets": HTMLContentWalletsElement;
        "navigation-menu": HTMLNavigationMenuElement;
        "wallet-address-display": HTMLWalletAddressDisplayElement;
    }
}
declare namespace LocalJSX {
    interface AcceptAnimationModal {
        "onAcceptAnimationModal-showAnimations"?: (event: CustomEvent<{ choice: boolean }>) => void;
    }
    interface AppRoot {
    }
    interface BlockchainBlock {
        "animationChoice"?: boolean;
        "onBlockchainBlock-frameIntersect"?: (event: CustomEvent<BlockchainBlockFrameIntersectDetail>) => void;
        "sectionConfig"?: IconLink;
    }
    interface BlockchainDisplay {
        "animationChoice"?: boolean;
    }
    interface BlockchainLinks {
    }
    interface CodeBit {
        "animation"?: "animate" | "idle" | undefined;
    }
    interface CodeCube {
        "animation"?: "animate" | "idle";
        "idleCube"?: boolean;
        "onCodeCube-animationComplete"?: (event: CustomEvent<CodeCubeAnimationCompleteState>) => void;
    }
    interface ContentAbout {
    }
    interface ContentContact {
    }
    interface ContentHome {
    }
    interface ContentSkills {
    }
    interface ContentWallets {
    }
    interface NavigationMenu {
        "onNavigationMenu-goTo"?: (event: CustomEvent<{sectionName: string}>) => void;
    }
    interface WalletAddressDisplay {
        "currency"?: string;
        "walletAddress"?: string;
    }
    interface IntrinsicElements {
        "accept-animation-modal": AcceptAnimationModal;
        "app-root": AppRoot;
        "blockchain-block": BlockchainBlock;
        "blockchain-display": BlockchainDisplay;
        "blockchain-links": BlockchainLinks;
        "code-bit": CodeBit;
        "code-cube": CodeCube;
        "content-about": ContentAbout;
        "content-contact": ContentContact;
        "content-home": ContentHome;
        "content-skills": ContentSkills;
        "content-wallets": ContentWallets;
        "navigation-menu": NavigationMenu;
        "wallet-address-display": WalletAddressDisplay;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accept-animation-modal": LocalJSX.AcceptAnimationModal & JSXBase.HTMLAttributes<HTMLAcceptAnimationModalElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blockchain-block": LocalJSX.BlockchainBlock & JSXBase.HTMLAttributes<HTMLBlockchainBlockElement>;
            "blockchain-display": LocalJSX.BlockchainDisplay & JSXBase.HTMLAttributes<HTMLBlockchainDisplayElement>;
            "blockchain-links": LocalJSX.BlockchainLinks & JSXBase.HTMLAttributes<HTMLBlockchainLinksElement>;
            "code-bit": LocalJSX.CodeBit & JSXBase.HTMLAttributes<HTMLCodeBitElement>;
            "code-cube": LocalJSX.CodeCube & JSXBase.HTMLAttributes<HTMLCodeCubeElement>;
            "content-about": LocalJSX.ContentAbout & JSXBase.HTMLAttributes<HTMLContentAboutElement>;
            "content-contact": LocalJSX.ContentContact & JSXBase.HTMLAttributes<HTMLContentContactElement>;
            "content-home": LocalJSX.ContentHome & JSXBase.HTMLAttributes<HTMLContentHomeElement>;
            "content-skills": LocalJSX.ContentSkills & JSXBase.HTMLAttributes<HTMLContentSkillsElement>;
            "content-wallets": LocalJSX.ContentWallets & JSXBase.HTMLAttributes<HTMLContentWalletsElement>;
            "navigation-menu": LocalJSX.NavigationMenu & JSXBase.HTMLAttributes<HTMLNavigationMenuElement>;
            "wallet-address-display": LocalJSX.WalletAddressDisplay & JSXBase.HTMLAttributes<HTMLWalletAddressDisplayElement>;
        }
    }
}
