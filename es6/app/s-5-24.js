// function blastoff(){
//     console.log('3...2...1...bum..');
// }
// blastoff();

// setTimeout(function(){
//     console.log('3...2...1...bum..');    
// }, 1000);

// setTimeout(()=>{
//     console.log('3...2...1...bum..');    
// }, 1000);


// const blastoff = () => {
//     console.log('3...2...1...bum..');        
// }

// blastoff();



this.a = 25;

let print = function(){
    this.a = 50;
    console.log('this.a = ', this.a);
}

print();

let arrowPrint = () => {
    console.log('this.a in arrowPrint = ', this.a);    
}

arrowPrint();

let eye = "eye";

const fire = () =>{
   console.log(`bulls-${eye}`);
 }
fire();