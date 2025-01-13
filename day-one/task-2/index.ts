function longestWord(sentence: string): string {
    const words = sentence.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const result = longestWord("It is the first day of practice");
console.log(result);