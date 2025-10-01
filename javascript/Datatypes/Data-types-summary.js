// Data types are of two types based on memory allocation and access of data 

// Primitive and Non Primitive


// Primitive data types are : String, Numbers, Boolean, Null, Undefined, Bigint, and Symbol


const score = 100 

let newName = "Harshu "
const inLoggedIn = false
const outSideTemp = null

let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 65846848748464n




// javascript is dynamically typed programming language.



// Reference type (Non Primitive) data type 

// Array , Objects , Functions 

const heros = ["shaktiman", "naagraj", "doga"]

let newUser = {
    name : "hitesh",
    age: 22,
}

let myFunction = function(){
    console.log("Hello World");

}

console.log(typeof bigNumber);
console.log(typeof myFunction);


// visit to this site to learn more about return type of all data-types
//https://262.ecma-international.org/5.1/#sec-11.4.3