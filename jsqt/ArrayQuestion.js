//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce function to calculate sum of all numbers in the array.
//Use the reduce function to calculate product of all numbers in the array.

let arrayLen = prompt("enter the length of Array");

let arr = [];
for(let i=1; i<=arrayLen; i++){
    arr[i-1] = i;
}
const result = arr.reduce((pre,nxt)=>{
    return pre+nxt;
});

const resultString = arr.reduce((pre,nxt)=>{
    return pre*nxt;
});

console.log(arr);
console.log("Sum",result);
console.log("Product",resultString);