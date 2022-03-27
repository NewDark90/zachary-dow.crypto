/** https://stackoverflow.com/a/2450976/2283050 */
export function shuffle<T>(array: Array<T>): Array<T> 
{
    let randomIndex: number;
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0)
    {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}