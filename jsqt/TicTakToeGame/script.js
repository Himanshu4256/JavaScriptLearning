let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerMsg = document.querySelector("#msg");
let drawMsg = document.querySelector("#drawMsg");
let turnO = true;

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    } )
}
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log(count+"Count...")
        console.log("box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner(count);
    })
})

const checkWinner = (count) => {
    let winnerFound = false;

    for (let pattern of winPatterns) {
        let zero = boxes[pattern[0]].innerText;
        let one = boxes[pattern[1]].innerText;
        let two = boxes[pattern[2]].innerText;

        if (zero !== "" && one !== "" && two !== "") {
            if (zero === one && one === two) {
                console.log("Winner,", zero);
                winnerMsg.innerText = `${zero} is the winner`;
                winnerFound = true;

                boxes.forEach((box) => {
                    box.disabled = true;
                });

                break;
            }
        }
    }
    if (!winnerFound && count === 9) {
        drawMsg.innerText = "This match is draw.";
    }
};


const matchDraw = (count) => {
    drawMsg.innerHTML = "This match is draw.";
};


resetBtn.addEventListener("click",resetGame)
