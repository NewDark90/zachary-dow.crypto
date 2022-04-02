export function insertBetween<TArray = any, TInsert = any>(array: TArray[], element: TInsert)
{
    return array.flatMap((x) => [element, x]).slice(1);
};
