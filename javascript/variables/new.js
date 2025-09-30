// Collecting data from user about his company like ( companyId, companyName, name, companyState)

const companyId = "125478"
let  companyName = "Amazon.aws" 
var name = "Harsh"
let companyEmail = "harshu@google.com"

let companyState;

/*
Prefer not to use var
because of issure in block scope and functional scope
*/

// console.log(companyId)
console.table([companyId, companyName, name, companyEmail, companyState])
