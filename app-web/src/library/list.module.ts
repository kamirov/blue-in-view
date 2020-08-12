export const List = {
    distinct
}

function distinct(arr: unknown[]) {
    return [...new Set(arr)];
}
