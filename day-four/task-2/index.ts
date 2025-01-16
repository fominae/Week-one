type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
}[];

type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};

const input: UserWithGadget = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];

function groupedGadgets(input: UserWithGadget): UserWithGadgets[] {
    const userObject: { [key: string]: UserWithGadgets } = {};

    input.forEach((user) => {
        if (userObject[user.id]) {
            userObject[user.id].gadgets.push(user.gadget);
        } else {
            userObject[user.id] = {
                id: user.id,
                name: user.name,
                gadgets: [user.gadget],
            };
        }
    });

    return Object.values(userObject);
}

const output = groupedGadgets(input);
console.log(output);
