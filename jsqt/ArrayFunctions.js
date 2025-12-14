/********************************
 * JAVASCRIPT ARRAY FUNCTIONS
 ********************************/

let arr = [10, 20, 30, 40];

console.log("Original array:", arr);

/* ===============================
   ADD / REMOVE ELEMENTS
   =============================== */

// push() → add at end
arr.push(50);
console.log("After push:", arr);

// pop() → remove from end
arr.pop();
console.log("After pop:", arr);

// unshift() → add at start
arr.unshift(5);
console.log("After unshift:", arr);

// shift() → remove from start
arr.shift();
console.log("After shift:", arr);

/* ===============================
   CONCAT
   =============================== */
let arr1 = [1, 2];
let arr2 = [3, 4];

let merged = arr1.concat(arr2);
console.log("Concat:", merged);

/* ===============================
   SLICE (does NOT change original)
   =============================== */
let sliceArr = arr.slice(1, 3);
console.log("Slice:", sliceArr);
console.log("After slice original:", arr);

/* ===============================
   SPLICE (changes original)
   =============================== */
// remove elements
arr.splice(1, 1);
console.log("After splice remove:", arr);

// add elements
arr.splice(1, 0, 25);
console.log("After splice add:", arr);

// replace elements
arr.splice(2, 1, 35);
console.log("After splice replace:", arr);

/* ===============================
   SEARCHING
   =============================== */
console.log("indexOf 35:", arr.indexOf(35));
console.log("includes 20:", arr.includes(20));

/* ===============================
   LOOPING METHODS
   =============================== */

// forEach()
arr.forEach(item => {
  console.log("forEach item:", item);
});

// map()
let doubled = arr.map(item => item * 2);
console.log("map (doubled):", doubled);

// filter()
let greaterThan20 = arr.filter(item => item > 20);
console.log("filter (>20):", greaterThan20);

// reduce()
let sum = arr.reduce((total, item) => total + item, 0);
console.log("reduce (sum):", sum);

/* ===============================
   SORT
   =============================== */
let nums = [10, 2, 30, 5];

// ascending
nums.sort((a, b) => a - b);
console.log("Sort ascending:", nums);

// descending
nums.sort((a, b) => b - a);
console.log("Sort descending:", nums);

/* ===============================
   REVERSE
   =============================== */
nums.reverse();
console.log("Reverse:", nums);

/* ===============================
   JOIN
   =============================== */
let joined = arr.join(" - ");
console.log("Join:", joined);

/* ===============================
   SPLIT (string → array)
   =============================== */
let str = "apple,banana,mango";
let fruits = str.split(",");
console.log("Split:", fruits);

/* ===============================
   EVERY / SOME
   =============================== */
console.log("Every > 10:", arr.every(item => item > 10));
console.log("Some > 30:", arr.some(item => item > 30));

/* ===============================
   FIND / FINDINDEX
   =============================== */
console.log("Find > 25:", arr.find(item => item > 25));
console.log("FindIndex > 25:", arr.findIndex(item => item > 25));

/* ===============================
   FLAT
   =============================== */
let nested = [1, [2, 3], [4, [5]]];
console.log("Flat:", nested.flat(2));

/* ===============================
   COPY ARRAY (IMPORTANT)
   =============================== */
let copy1 = [...arr];
console.log("Spread copy:", copy1);

let copy2 = Array.from(arr);
console.log("Array.from copy:", copy2);
