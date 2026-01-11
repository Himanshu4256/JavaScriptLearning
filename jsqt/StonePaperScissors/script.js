const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("data-choice");
        result.innerText = "You selected: " + userChoice;
    });
});
