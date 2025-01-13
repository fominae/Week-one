function indexOf(str: string, substring: string): number {

    for (let i = 0; i <= str.length - substring.length; i++) {
        let match = true;
        for (let j = 0; j < substring.length; j++) {
            if (str[i + j] !== substring[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }

    return -1;
}

const str = "shortIt is the first day of practicebee";
const substring = "first";

const result = indexOf(str, substring);
console.log(result);
