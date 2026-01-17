const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("data-choice");
        const comSelected = genCompChoice();

        result.innerText =
            "You selected: " + userChoice + "\n" +
            "Computer selected: " + comSelected;

        if (userChoice === comSelected) {
            drawGame(result);
        } else {
            let userWin = true;

            if (userChoice === "rock") {
                userWin = comSelected === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = comSelected === "scissors" ? false : true;
            } else {
                userWin = comSelected === "rock" ? false : true;
            }

            showWinner(userWin);
        }
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = (result) => {
    result.innerText += "\nDraw game 🤝";
};

const showWinner = (userWin) => {
    if (userWin) {
        result.innerText += "\nYou win! 🎉";
    } else {
        result.innerText += "\nYou lose 😢";
    }
};
