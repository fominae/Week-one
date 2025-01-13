function identicalLetters(str1: string, str2: string): string {
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

    let commonCharacters = "";

    for (const char of lowerStr1) {
        const index = lowerStr2.indexOf(char);
        if (index !== -1) {
            commonCharacters += char;
            lowerStr2 = lowerStr2.slice(0, index) + lowerStr2.slice(index + 1);
        }
    }

    return commonCharacters;
}

const result = identicalLetters("pRRractice", "exerrcise");
console.log(result);
