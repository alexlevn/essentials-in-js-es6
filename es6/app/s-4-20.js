let c = [100, 200];
// let a = c[0];
// let b = c[1];
let [a,b] = c;
console.log(a,b);


let fellowship = ["Abn", "Binh", "Chan"];
let [hobbit, wizard, ranger] = fellowship;
console.log(hobbit, wizard, ranger);

let d = [100, 200, 300, 400, 500];
let [e,...f] = d;
console.log(e,f);