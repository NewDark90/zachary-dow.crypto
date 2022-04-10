export function parseBase64Data(str: string): string 
{
    return window.atob(str.split(/,/)[1]);
}