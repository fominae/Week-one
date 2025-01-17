const position = ["Камень", "Ножницы", "Бумага"];

function playRockPaperScissors(): { result: string; player: string; computer: string } {
    const playerPosition = prompt("Выберите позицию (Камень, Ножницы, Бумага)");
    if (!playerPosition || !position.includes(playerPosition)) {
        alert("Такой позиции не существует!");
        return playRockPaperScissors();
    }

    const computerPosition = position[Math.floor(Math.random() * position.length)];

    let result;
    if (playerPosition === computerPosition) {
        result = "Ничья";
    } else if (
        (playerPosition === "Камень" && computerPosition === "Ножницы") ||
        (playerPosition === "Ножницы" && computerPosition === "Бумага") ||
        (playerPosition === "Бумага" && computerPosition === "Камень")
    ) {
        result = "Победитель - игрок";
    } else {
        result = "Победитель - компьютер";
    }

    return { player: playerPosition, computer: computerPosition, result };
}

const result = playRockPaperScissors();
console.log(result);
