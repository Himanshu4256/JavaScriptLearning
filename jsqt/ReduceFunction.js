//Reduce - Performs some operations & reduce the array to a single value. it return that single value
    // ye Array k two indexs ko leta hai args mai

let arr = [7,5,4,3,5,3,4,5]

const output = arr.reduce((prev,curr) => {
    return prev < curr ? prev : curr;
});
console.log(output);