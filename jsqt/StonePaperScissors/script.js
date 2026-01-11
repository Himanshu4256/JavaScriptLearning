const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("data-choice");
        const comSelected = genCompChoice();
        result.innerText = "You selected: " + userChoice + "\n" + "Computer selected: " + comSelected;

        if(userChoice === comSelected){
            result.innerText += "\nCongratulations!! You Win 🎉";
        }
    });
});

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}