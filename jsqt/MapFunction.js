// 1 - Creates a new array with the results of some operation. The value its
    // callback returns are used to form new array
//arr.map(callbackFnx(value,index,array))

// it is simple like a foreach() method it return an array

let nums = [67,52,40]
let result = nums.map((val) => {
    console.log(val*2);
})