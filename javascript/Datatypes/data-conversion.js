
let score = false
// console.log(typeof score);

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// look how the conversion happens
// "33" => 33
// "33abc" => NaN(not a number) --> type --> number
// true => 1 / false => 0

 
let isLoggedIn = 1

// console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn);

// console.log(booleanIsLoggedIn);


let someNumber = 33

let stringNumber = String(someNumber)

// console.log(typeof stringNumber);
// console.log(stringNumber);


// we did conversion of number to string , number to boolean , and string to number by using Number(), String(), and Boolean()


//***************************Operations**********************/



let value = 33
let negvalue = -value
// console.log(negvalue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);


let str1 = "hello"
let str2 = " Priyanshu"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2");  //12

// console.log("1" + 2 + 3);// we supposed the answer would be 1+(2+3)--> 1+5--> 15 but we wrong the correct answer is 123


// console.log(1 + 2 + "3");//but above example is not same as the output is different that is 33 --> (1+2)+3  --> 33



// console.log((3 + 4) * 5 / 7); // avoid writing like this and include parenthesis to make it clear what after operation you want to perform


// console.log(true);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// link to study about prefix and postfix operator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment




