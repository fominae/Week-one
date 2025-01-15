type User = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
};

function fakeApi(delay: number): Promise<User[]> {
    const fakeUsersData: User[] = [
        {
            id: "c849a8e9-f8a6-49af-a5bb-daf4cdf6ad90",
            name: "Chris Owen",
            phone: "+7913-426-25-06",
            email: "aifdxabbj@yomail.info",
            location: "Moscow",
            status: "active"
        },
        {
            id: "21be6b87-cae0-4767-ba36-0b6b2d43adbf",
            name: "Joshua Ross",
            phone: "+7906-486-25-79",
            email: "aibulndrhewvca@dropmail.me",
            location: "Tomsk",
            status: "delete"
        }
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeUsersData);
        }, delay);
    });
}

fakeApi(2000)
    .then((data) => {
        console.log("Данные получены", data);
    })
    .catch((error) => {
        console.error("Ошибка", error);
    });
