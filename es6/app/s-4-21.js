// let wizard = {magical: true, power: 10};
// let {magical, power} = wizard;
// console.log(magical, power);


let magical = true;
let power = 2;

let ranger = {magical: false, power: 9};

// let {magical, power} = ranger; // error

({magical,power} = ranger) // assignment

console.log(magical, power);