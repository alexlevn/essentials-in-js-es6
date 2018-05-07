# Essentials in Javacript ES6

(some tricks in coding, cmd)

### Summary (Small Table of Content)

1. Setting Up

2. ES6 - Tool:
    + Babel: Why, What, How
    + Webpack: ...

3. ES6 - Syntax
    + let
    + const - scoping
    + template literals tring

4. Operating - Destructing
    + spread operator
    + destructing assignment - arrays

5. Functions & Method
    + arrow function
    + map method
    + filter in es6

6. Module in ES6
    + export values
    + export expression and by default

7. Classes
    + oop
    + setting up and es6 classes
    + inheritance in es6 classes

8. Exenting upon es6 with React
    + jsx in es6
    + esy promises and more react

--------------------------------------

1. WHY we need Babel - a transpiler.


    For: shorter coding & easier to understand, constructure. 

    - coffee script & typescript: many browser do not support these languages
    - convert to pure plain, old javascript.
    - convert typescript & coffeescript code back into original js.
    - Babel: most transpiler & industry standard

2. HOW does Babel work?
    Babel: is a Javascript Compiler. (WHAT)

3. Webpack - Benerfit of Webpack. 
    - Convert any ES6 files into JS file, and browser can handle it.
    - It bundles modules (all) into ONE.js file.
    - HOW:

4. Coding:
    Install: 
    - npm install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --sav-dev
    

5. Variable scoping with let

Quiz
    Question 1:
        Say we have:
        
        const array = [1, 2, 3].  
        
        Which of the following statements is valid and will not throw an error?
        - array = [1,2,3,4] // error
        - array.push(5); // ok
        - array = 3 + 1; // error

6. Template Literals - Strings
    let a = "hello";
    let b = "world";
    let c = `hello - ${b}`;
    let d = `${a} - WORLD`;

7. Spread:
    let arr = [1,2,3];
    let arr_2 = [0,...arr, 4, 9];

    function print(...z){
        console.log(z);
    }

    print(1,2,3,4,5,6);

8. Destructring Assignment 
    +  
    let c = [100, 200];
    let [a,b] = c;
    console.log(a,b);

    let fellowship = ["Abn", "Binh", "Chan"];
    let [hobbit, wizard, ranger] = fellowship;
    console.log(hobbit, wizard, ranger);

    let d = [100, 200, 300, 400, 500];
    let [e,...f] = d;
    console.log(e,f);


9. Arrow function
    const blastoff = () => {
       console.log('3...2...1...bum..');        
    }

    () => { console.log('abc def...'); };

    + Benerfit of arrow function:
        - do not bind their own this.
        - shorter

    + this keywork in arrow function
    
    this.a = 25;
    let print = function(){
        this.a = 50;
        console.log('this.a = ', this.a);
    }
    print(); // 50

    let arrowPrint = () => {
        console.log('this.a in arrowPrint = ', this.a);    
    }
    arrowPrint(); // 25

10. Map function:

    let points = [10, 20, 30];

    // let addOne = function (element) {
    //     return element + 1;
    // };

    // let addOne = (element) => {
    //     return element + 1;
    // };
    // points = points.map(addOne);

    points = points.map(e => e + 2 );

11. filter() method and more helper methods:

    scores = [110, 20, 30, 70, 90, 112, 34, 999, 82, 13];
    let passing = scores.filter(e => e >=70);
    console.log(passing);

    /* the similar methods: (more helper method) */
    // find();
    // forEach();
    // reduce(), some(), keys(), values()...

12. export values
    
    // student.js
    export const students = [1, 2, 3];
    export const total = 505;
    // index.js
    import { students, total } from './students'

13. export default:
    
    // students.js
    export default students;
    // index.js
    import students from './students'

    // We cannot write the export default syntax and declare variables on the same line.

14. Object-Oriented Programming.
    
    - oop: cover encapsulation, iheritance, abstraction, and more..

    - classes: 





----------------

### *Issue:
    I-1.

    (Fixed my self with google. )

    If you approach some issues running 'npm start', then try the following fixes one at a time:
        1) Install webpack globally with `npm install webpack -g'.

        2) In webpack.config.js change the path in output to 'path: __dirname + '/build' in this file.

        3) If the above path does not work, also try: path: __dirname + '/dist/js'

        4) Clone the repo, run npm install and npm start and you should be good to go!

    I-2:
        - change:
                loaders 
            to:
                rules
        
        - add to config file: "mode": "development"

+ The main points of babel and webpack.

    1. A transpiler reads code written in one language and produces the equivalent code in another.

    2. We need transpilers so that our pretty es6 code compiles into the dense JavaScript code that browser like. Babel is one of the most popular es6 transpilers.

    3. Using webpack allows us to create an environment that transforms es6 code with babel.

        a. It combines multiple modules into one js file to reduce errors and resources on the client-side.

        b. Shipping with a development server, it gives us live code updating for free! (webpack-dev-server)

------------------

### QUIZ
    Question 1:
    Consider this array

    const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"]; 

    Which of the following statements will give me the variable, wizard, with the value of "Gandalf"?

    a) let [hobbit, wizard, ranger, elf, dwarf] = fellowship; // OK
    b) let [...characters] = fellowship;
    c) let [wizard, hobbit, elf, dwarf, ranger];


    Question 2:
    Consider the same array

    const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"]; 

    Which of the following statements gives me the array, three_amigos, with the value ["Aragorn", "Legolas", "Gimli"]?

    let [hobbit, wizzard, ...three_amigos] = fellowship;

    Question 1:
    Consider this object

    const lion = { size: 'large', sound: 'roar' }; 

    Which of the following statements uses destructuring assignment to give the variable, sound, the value of 'roar'?

    let {sound} = lion;

    Question 2:
    Consider this object

    const mouse = { size: 'small', sound: 'squeak '};

    Which of the following statements uses destructuring assignment to assign two variables, size to 'small', and sound to 'squeak'?

    let {side, sound} = mouse;


    --------
    Exercise: 

    Scaling Maps (Map Helper Method)
    Lewis has a list of path lengths in inches on his map, represented by this array.

    let lengths = [3, 7, 5]; 

    Now, Lewis and his best friend, Clark, want to know how long these paths are in real life. Luckily, they know that an inch on the map equals 8 miles in real life.

    Fix the scale function to return a new array with the values that Lewis and Clark want. Use a map helper method, and the 'multiple' parameter to do so.

    index.js

    let lengths = [3, 7, 5];
    let multiple = 8;

    const scale = (multiple) => {
    return lengths // TODO fill out the rest;
    };


    Answer: 
    
    let lengths = [3, 7, 5];
    let multiple = 8;

    const scale = (multiple) => {
    return lengths.map(e => e * multiple);
    };


