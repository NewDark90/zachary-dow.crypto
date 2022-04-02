import { randomInt, shuffle } from "../util"

const rareEmojis = [ "✊", "🤝", "🌎", "🌹", "🕊", "⛓", "⛓️", "❤️", "🖤", "💚", "☮️", "🟥", "⬛️", "🌲", "🏴", "☭" ];
const emojiRarity = 80;

export interface BitListState {
    index: number;
    skip: number;
};

export class BitList
{
    private readonly list: string[];

    constructor(
        emojis: string[],
        emojiRarity: number
    ) {
        this.list = Array.from(
            new Array(emojis.length * emojiRarity),
            (_v: undefined, i: number) => { return `${i % 2}`; }
        );
        this.list.push(...rareEmojis);
        shuffle(this.list);
        Object.freeze(this.list);
    }

    newState(): BitListState
    {
       return {
            index: randomInt(0, this.list.length),
            skip: randomInt(0, this.list.length),
       };
    }

    getBit(state: BitListState): string
    {
        state.index += state.skip;
        state.index = state.index % this.list.length;

        return this.list[state.index]
    }
}

export const bitList = new BitList(rareEmojis, emojiRarity);

console.log(bitList);
