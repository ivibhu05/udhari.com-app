
export function concatenateFirstLetters(fullName: string): string {
    const words = fullName.split(' ');
    const firstLetters = words.map(word => word.charAt(0).toUpperCase());
    return firstLetters.join('');
}