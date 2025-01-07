// Syntax of Javascript

// 1. Variables
let name = "John";     // Variable that can be reassigned
const age = 30;        // Constant variable that cannot be reassigned
var isStudent = true;  // Older way to declare variables, function

console.log(name)
console.log(age)
console.log(isStudent)

// 2. Datatypes
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

console.log(number);
console.log(string);
console.log(isActive);
console.log(numbers);

// 3. Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

console.log(sum);
console.log(isEqual);
console.log(isTrue);

// 4. Funcation

//function declaration
function greet(name){
    return 'Hello ' + name;
}

//function call
let message = greet("Krish");
console.log(message);

// Arrow Function
let userDetails = (firstName, lastName) => {
    let combineName = firstName + " " + lastName;
    return combineName;
}

let msg1 = userDetails("David", "Alex")
console.log(msg1);

// 5. If/Else 
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 6. Loops
// for loop
for(i=0;i<5;i++){
    console.log(i);
}

//while loop
let j = 0;
while(j<5){
    console.log(j);
    j++;
}

// 7. Objects
let user = {
    name: "Krish",
    age: 19
}

console.log("krish age is ",user.age);

// Array of Objects
const uesrs = [{
    name: "krish",
    age: 19
},{
    name: "Jhon",
    age: 20
}]

const user1 = uesrs[0]
console.log(user1);

const user2Age = uesrs[1].age
console.log(user2Age);

// Object of Objects

const userO = {
    name: "Krish",
    age: 19,
    address: {
        city: "Ahemdabad",
        country: "india"
    }   
}

const city = userO.address.city
console.log(city);          //Ahemdabad