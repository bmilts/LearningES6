console.log("Hello from JS in another file");

// How DOM works

console.log(typeof document);

document.getElementById('example').innerHTML = 'Javascript is awesome';

// Variables statements, comments, keywords

var a, b;
a = 'Hello';
b = a + ' ' + 'World';

console.log(b);

var c, d;
c = 1;
d = c + 5.5;

/* Variable assignment */

// a (naming identifier) 
// variable names cannot start with number 
// variables can start with dollar signs and have _ (snake casing) or camelCasing
// stay internally consistent
var e = 30;

/* Operators (statements or expressions)*/

var z = 10 * 4 / 2;
console.log(z);

var f = "Good " + "day";
console.log(f);

// Modulus, similar to division but returns remainder
// Purpose: allows useful checks on number if even or odd
var g = 9 % 3;
console.log(g);

/* Functions */

function print(h, i, j) {
    console.log(h + i + j);
}

print("One ", "Two ", "Three");

var printFunct = function(h, i, j) {
    console.log(h + i + j);
}

printFunct("One ", "Two ", "Three");

// Function returning data
var multiply = function(a, b){
    return a*b;
}

var product = multiply(5, 10);
console.log(product);

/* Objects */

var dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    weight: 60,
    bark: function(){
        console.log("Woof!");
    }
};

console.log(dog);

// access from within dog object

console.log(dog.breed);

// access string from withing dog object

console.log(dog["breed"]);

// add methods or functions to dog object and invoke function

dog.bark();

/* Arrays and array methods */

// Arrays allow holding multiple values within one variable

var points = [25, 16, 7, 9, 31];

// Add element
points.push(8);

console.log(points);

// Remove element
var last = points.pop();

console.log(points, last);

// Access elements
var first = points[0];
console.log(first);

// Access length
console.log(points.length);

/* Booleans */

var bool = 5 == 5;
console.log(bool);

/* If statements */

var x = 10;

if(8 > x) {
    console.log("8 is greater!")
} else if (15 > x){
    console.log("15 Is greater!")
} else {
    console.log("Is not known")
}

// Helper function to check if 

var check = function(number){
    if(number % 2 == 0){
        console.log(number + " is even!");
    } else {
        console.log(number + " is odd");
    }
}

check(4);
check(7);

/* Switch Statements */

var swtch = 4;

switch(swtch){
    case 1:
        console.log("The number is 1!");
        break;
    case 2:
        console.log("The number is 2!");
        break;
    case 3:
        console.log("The number is 3!");
        break;
    default:
        console.log("The number is " + swtch);
        break;
}







