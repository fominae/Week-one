type User = {
    name: string;
    email: string;
    isActive: boolean;
}

const users: User[] = [
    {
        name: "  Chris  Owen",
        email: "AifdXabbj@yomail.info",
        isActive: true
    },
    {
        name: "Joshua Ross",
        email: "aibulndrhewvca@dropmail.me",
        isActive: false
    }
];

async function cleanUserData(users: User[]): Promise<User[]> {
    try {
        if (Math.random() < 0.1) {
            throw new Error('Ошибка');
        }

        const usersActive = users.filter(user => user.isActive);

        const cleanedUsers = usersActive.map(user => ({
            name: user.name.trim().toLowerCase().split(/\s+/).join(" "),
            email: user.email.toLowerCase(),
            isActive: user.isActive
        }));

        return cleanedUsers;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

cleanUserData(users).then(cleanedUsers => {
    console.log(cleanedUsers);
});
