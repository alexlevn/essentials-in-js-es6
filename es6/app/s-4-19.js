/* ------------------------------------------ */
/* */
let a = [7,8,9];
let b = [6, ...a, 10];

console.log("B:", b); // [6, 7, 8, 9, 10]

// Similar to
let c = [6].concat(a, [10]);
console.log("C:", c); // [6, 7, 8, 9, 10]


/* ------------------------------------------ */
function print(a, b, c){
    console.log("----:", a,b,c);
}

let z = [1,2,3];

console.log("Old:");
print(z[0], z[1], z[2]);

console.log("Spread:");
print(...z);

/* ------------------------------------------ */
function new_print(...z){
    console.log("Array:", z);
}

new_print(3,4,5,6);

/* PRACTICE */
// Let's practice using the spread/rest operator!

// **Directions:**
// We have a function 'butter'. Right now it only returns the array 'a', [1, 2, 3];
// Later on, we call, butter(4, 5, 6). But instead of [1, 2, 3], we want butter to return [1, 2, 3, 4, 5, 6];
// How can we take advantage of the spread operator to make butter simply return [1, 2, 3, 4, 5, 6]?
// Hint: we have to use the spread syntax ( ... ) twice, and don't forget to return the output. Also, make sure the code works if you call butter(4, 5, 6)!

// index.js
// Origin
// function butter(...arr) {
//     let a = [1, 2, 3];
//     return [...a, ...arr];
//   }
  
//   butter(4, 5, 6);
  

// Answer:
// function butter(...arr) {
//     let a = [1, 2, 3];
//     return [...a, ...arr];
// } 
// butter(4, 5, 6);
  