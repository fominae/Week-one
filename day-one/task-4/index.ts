function runLengthEncoding(str: string): string {
    let encoded = "";
    let i = 0;

    while (i < str.length) {
        let count = 1;
        const currentChar = str[i];

        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            i++;
        }

        encoded += currentChar + count;
        i++;
    }

    return encoded;
}

function runLengthDecoding(encoded: string): string {
    let decoded = "";
    let i = 0;

    while (i < encoded.length) {
        const char = encoded[i];
        i++;

        let count = "";
        while (i < encoded.length && !isNaN(Number(encoded[i]))) {
            count += encoded[i];
            i++;
        }

        decoded += char.repeat(Number(count));
    }

    return decoded;
}

const originalString = "aaaaaabbbcc";
const encodedString = runLengthEncoding(originalString);
console.log("Кодирование:", encodedString);

const decodedString = runLengthDecoding(encodedString);
console.log("Декодирование:", decodedString);
