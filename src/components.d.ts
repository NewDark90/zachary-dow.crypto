/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BlockNames } from "./env";
export namespace Components {
    interface AcceptAnimationModal {
    }
    interface AppRoot {
    }
    interface BlockchainBlock {
        "blockName": BlockNames;
        "position": "left" | "right";
    }
    interface BlockchainDisplay {
    }
    interface CodeBit {
        "animation": "animate" | "idle" | undefined;
    }
    interface CodeCube {
        "animation"?: "animate" | "idle";
        "idleCube": boolean;
    }
    interface NavigationMenu {
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
    interface HTMLNavigationMenuElement extends Components.NavigationMenu, HTMLStencilElement {
    }
    var HTMLNavigationMenuElement: {
        prototype: HTMLNavigationMenuElement;
        new (): HTMLNavigationMenuElement;
    };
    interface HTMLElementTagNameMap {
        "accept-animation-modal": HTMLAcceptAnimationModalElement;
        "app-root": HTMLAppRootElement;
        "blockchain-block": HTMLBlockchainBlockElement;
        "blockchain-display": HTMLBlockchainDisplayElement;
        "code-bit": HTMLCodeBitElement;
        "code-cube": HTMLCodeCubeElement;
        "navigation-menu": HTMLNavigationMenuElement;
    }
}
declare namespace LocalJSX {
    interface AcceptAnimationModal {
        "onAcceptAnimationModal-test"?: (event: CustomEvent<{}>) => void;
    }
    interface AppRoot {
    }
    interface BlockchainBlock {
        "blockName"?: BlockNames;
        "position"?: "left" | "right";
    }
    interface BlockchainDisplay {
    }
    interface CodeBit {
        "animation"?: "animate" | "idle" | undefined;
    }
    interface CodeCube {
        "animation"?: "animate" | "idle";
        "idleCube"?: boolean;
    }
    interface NavigationMenu {
    }
    interface IntrinsicElements {
        "accept-animation-modal": AcceptAnimationModal;
        "app-root": AppRoot;
        "blockchain-block": BlockchainBlock;
        "blockchain-display": BlockchainDisplay;
        "code-bit": CodeBit;
        "code-cube": CodeCube;
        "navigation-menu": NavigationMenu;
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
            "code-bit": LocalJSX.CodeBit & JSXBase.HTMLAttributes<HTMLCodeBitElement>;
            "code-cube": LocalJSX.CodeCube & JSXBase.HTMLAttributes<HTMLCodeCubeElement>;
            "navigation-menu": LocalJSX.NavigationMenu & JSXBase.HTMLAttributes<HTMLNavigationMenuElement>;
        }
    }
}
