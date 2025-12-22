let btn = document.querySelector("#test");
let btn1 = document.querySelector("#btn1");


// btn.onclick = () => {
//     console.log("Js Button Just Clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }


// through Event Listner
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1")
})

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2")
})

const handler3 = () => {
    console.log("button1 was clicked - handler3")
}

btn1.addEventListener("click", handler3)
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4")
})

btn1.removeEventListener("click", handler3)


//Toggling - change one state to another state

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
    } else {
        currMode = "light";
        body.classList.add("light");
    }

    console.log(currMode);
})