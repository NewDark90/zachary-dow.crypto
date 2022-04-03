export function insertBetween<TArray = any, TInsert = any>(
    array: TArray[],
    getElement: (index: number) => TInsert
): (TArray | TInsert)[]
{
    return array.flatMap((arr, index) => [
            getElement(index),
            arr
        ]).slice(1);
};
