const countFilledValues = (obj: Record<string, unknown>): number => {
    let count = 0;
    for (const key in obj) {
        const value = obj[key];
        if (value !== null && value !== undefined && value !== "") {
            count++;
        }
    }
    return count;
};

const data = {
    name: "Alice",
    age: 0,
    address: "",
    phone: 8564767854,
    email: undefined,
    notes: null,
};

console.log(countFilledValues(data));
