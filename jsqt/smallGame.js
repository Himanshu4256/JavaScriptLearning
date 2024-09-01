let number = Math.floor(Math.random() * 101);
//console.log(number);
let myNumber = prompt("Enter number");
while(number != myNumber){
        myNumber = prompt("Please try again...");
}
console.log("Bravo!! you have won the match")
