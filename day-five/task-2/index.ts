const denominations = [100, 50, 10, 5, 2, 1];
const result: Record<number, number> = {};

const numberOfBills = (amount: number) => {

    for (const denomination of denominations) {
        result[denomination] = 0;
        while (amount >= denomination) {
            amount -= denomination;
            result[denomination] = (result[denomination] || 0) + 1;
        }
    }
    denominations.forEach((denomination) => console.log(`${denomination}: ${result[denomination]}`))
}

const amount = 158;
numberOfBills(amount);