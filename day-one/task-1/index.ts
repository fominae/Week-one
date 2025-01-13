function identicalLetters(str1: string, str2: string): string {
    const set1 = new Set(str1.toLowerCase());
    const set2 = new Set(str2.toLowerCase());
    const commonCharacters: string[] = [];

    for (const char of set1) {
        if (set2.has(char)) {
            commonCharacters.push(char);
        }
    }

    return commonCharacters.join('');
}

const result = identicalLetters("pRactice", "exercisE");
console.log(result);
