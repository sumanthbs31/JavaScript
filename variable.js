// ways to declare variables in js

// var , let , const

let firstName = "Sumanth"
let secondName = "BS"

console.log(firstName , secondName)

let age = 22

console.log(age)

// Naming Conventions
// - Only letters , numbers , underscores and dollar signs
// - Can't start with a number


//  Multi-word Formatting
// firstName = camelCase
// first_name = underscore (snakecase)
// FirstCase = PascalCase
// firstname = lowercase

// Re-assigning variables
age = 25
console.log(age)

let score 

score = 1

console.log(score)

if (true) {
    score = score + 1
}


console.log(score)

// const x = 200

// x = 200 

const name = undefined 
console.log(name)

const arr = [1,2,3,4,]

arr.push(5);
console.log(arr)


const person = {
    name : "Sumanth BS",
    brand : "BS"
}

person.name = "SUMANTH BS"

person.email = "sumanthbs02@gmail.com"

console.log(person)


// declare multiple values at once
let a , b , c 

const d = 10 , e = 20 , f = 30

console.log(e)
console.log(b)
