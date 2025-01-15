function createDelayedMessage(delay: number, message: string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}
createDelayedMessage(2000, "message").then(console.log);
