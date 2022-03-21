export const blockNames = [
    "home",
    "about",
    "contact",
    "skills",
    "wallets"
] as const;


export type BlockNames = typeof blockNames[number];
