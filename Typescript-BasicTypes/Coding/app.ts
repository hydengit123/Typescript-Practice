// Type Inference
let age: number;
age = 29;

//[TS types are checked during compilation, JS types during runtime]
//JavaScript types
typeof 'Max' //'string'

//TypeScript types
const name1: string = 'mukesh'


//Object types
const person: {
    name: string;
    tags: string[];
    age: number
} = {
    name: "mukesh",
    tags: ['great-offer', 'hot-and-new'],
    age: 30
}


// Tuples
const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'mukesh',
    age:30,
    hobbies: ['sports', 'cricket'],
    role: [2, 'author']
}

person1.role.push('admin'); // this is allowed in tuples as an exception
// person1.role[1] = 10; // this is not allowed in tuples
// person1.role = [0, 'admin', 'user']; // this is also not allowed in tuples


//Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person2 = {
    name: 'mukesh',
    age:30,
    hobbies: ['sports', 'cricket'],
    role: Role.ADMIN
}
if(person2.role === Role.ADMIN){
    console.log("is admin");
}


//Union Type
function combine(input1: number | string, input2: number | string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);

//Type Aliases/Custom Types
// type combinable = number | string;
// function combine1(input1: combinable, input2: combinable) {}

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }
   
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }

// type User1 = { name: string; age: number };
 
// function greet1(user: User1) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder1(user: User1, checkAge: number) {
//   return checkAge > user.age;
// }


//function as Types
function add(n1: number, n2: number) {
    return n1+n2;
}
let combineValues: (a: number, b: number) => number;
combineValues  = add;
// combineValues = 5; // !!! ERROR !!!
console.log(combineValues(8, 8));


//Function Types & Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1+n2;
    cb(result);
}

addAndHandle(10,20, (result) => {
    console.log(result);
});



//Type unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Mukesh';

//userName = userInput; // Error => Type 'unknown' is not assignable to type 'string'.
if(typeof userInput === 'string'){
    userName = userInput;
}