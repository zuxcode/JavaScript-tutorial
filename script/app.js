// console.log("Hello World");

// console.warn("You are learning JavaScript");

// function alertMe() {
//   alert("Hello");
// }

// Declare variable and initialize variable
greet = "Hello User"; // don't use method
// console.log("greet: ", greet);

// keyword in javascript

var sayTime = "10:00pm"; // never use this method as well
// console.log("sayTime: ", sayTime);

let username = "John Doe";
// console.log("username: ", username);

const age = 24;
// console.log("age: ", age);

// Re-assign variable

username = "Obehi";
// console.log("username: ", username);

// Comment in JavaScript

// single comment

/* 
Multiple
line
comment
*/

/**
 * Data type
 * Primitive datatype
 */

// String data type
const mySingleString = 'my single quote string';
// console.log('mySingleString: ', mySingleString);

const myDoubleString = "my Double quote string";
// console.log('myDoubleString: ', myDoubleString);

// Number data type
const myNum = 100; // Integer number
// console.log('myNum: ', myNum)

const PI = 3.14 // Float number
// console.log('PI: ', PI);


// Boolean data type
const isBool = true // or false
// console.log('isBool: ', isBool);

// undefined
let userAge = undefined
// console.log('userAge: ', userAge);

userAge = 20
// console.log('userAge: ', userAge);

let fulName = null;
// console.log('fulName: ', fulName);

fulName = "Amada"
// console.log('fulName: ', fulName);

// VAriable Declaration
let undefineVar;
// console.log('undefineVar: ', undefineVar);


// Variable Naming Rules And style

/**
 * A variable name should accurately identify your variable. 
 * When you create good variable names, your JavaScript code 
 * becomes easier to understand and easier to work with. 
 * Properly naming variables is really important.
 * JavaScript also has some rules when it comes to 
 * naming variables; read about these rules through 
 * the links below. 
 * Visit the following resources to learn more:
 */

// camelCase 
const personAge = 50

// PascalCase

const PersonAge = 20

const AGE = 40

// snakeCase
const person_age = 60;


// JavaScript Hoisting

console.log(program)


var program = "Hello JavaScript";



// variable Scopes

/**
 * Global scope
 * Function scope
 */

function greetFunc() {
    console.log("program: ", program);
    
    let age = 70;
    console.log('age: ', age);

   localVar = "Local scoop variable to global scoop"
}

greetFunc()

console.log('localVar: ', localVar);

// console.log('age: ', age);
