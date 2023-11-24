//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof userEmail);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack(Primitive) String, Number, Boolean, null, undefined, Symbol, BigInt; 

//Heap(Non-Primitive) Array, Objects, Functions;

let myYoutubename = "HiteshChoudary"
let anothername = myYoutubename

anothername = "ChaiaurCode"

console.log(anothername)
console.log(myYoutubename)

// All the primitive datatypes are stored in Stack where each variable gets a copy of the memory.
// All the non primitive data types get stored in heap where each of these data-types gets a reference as shown below.

let userone = {
    email: "mohan@gmail.com",
    upi:"Mohan@okicici"
}

let usertwo = userone

usertwo.upi = "Mohan@ybl"

console.log(userone.upi);
console.log(usertwo.upi);