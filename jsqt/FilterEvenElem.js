let arr = [7,8,7,4,5,6,9,3,4,7,5,6];
let evenArray = arr.filter((val) => {
    return val%2===0;
});
console.log(evenArray)