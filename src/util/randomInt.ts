/**
 * The maximum is exclusive and the minimum is inclusive
 * @param min inclusive
 * @param max exclusive
 * @returns integer in range of min and max
 */
export function randomInt(min: number, max: number): number
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
