function runFunction() {
  alert('The button has been clicked!')

  // Uncomment the line of code below to log a message to the console instead
  // Press command + option + j on Mac to open the console
  // Press ctrl + shift + j on Windows to open the console
  // console.log('Function ran successfully')

  // Reassigning let variable
  // let name = null
  // const nameInSpan = document.getElementById('name').textContent
  // name = nameInSpan
  // console.log(name)
}

/* --------------------- VARIABLE PRACTICE --------------------- */

function variablePractice() {
  const data = null
  const myNum = 1
  const myString = 'foo'
  const myString2 = '5'
  const myBoolean = true
  const myBoolean2 = false
  console.log(data, myNum, myString, myString2, myBoolean, myBoolean2)

  // let allows variables to be initialized before being assigned a value:
  let car
  car = 'Mustang'
  console.log(car)

  // Reassigning variables
  car = 'Ferrari'
  console.log(car)
}

// variablePractice()

/* --------------------- FUNCTIONS PRACTICE --------------------- */

// 1. Finish the sayHello function below and call the function with an argument.

function sayHello() {}

// 2. Write your own function declaration below that logs a message to the console with multiple parameters

/* --------------------- SCOPE PRACTICE --------------------- */

function scopePractice() {
  // var is function scoped
  // Variables initialized with var are available anywhere witin function regardless of scope.
  var name1 = 'Frank'
  // let name4 = 'Michelle'

  function innerFunction() {
    // Variables initialized with let and const are block scoped
    // Block scoped variables are only available within this block of code (block refers to curly braces)
    let name2 = 'John'
    const name3 = 'Kevin'

    console.log(name2, name3, name4)
  }

  innerFunction()

  // Uncomment the line of code to below to test variables availability.
  // console.log(name2, name3)
}

// scopePractice()

/* --------------------- IF ... ELSE IF ... ELSE / COMPARISON OPERATORS PRACTICE --------------------- */

// Complete the conditions below

// function isLegalAge(age) {
//   if () {
//     console.log('No age entered.')
//   } else if () {
//     console.log('Legal')
//   } else {
//     console.log('Illegal')
//   }
// }

// isLegalAge()

/* --------------------- LOGICAL OPERATORS PRACTICE --------------------- */

// Returns first falsy value or last truthy value

// False Values List:
// - false
// - null
// - undefined
// - empty string: "" and ''
// - 0
// - NaN

const hasEngine = true
const hasWheels = true

// Uncomment the below if else block
// if (hasEngine && hasWheels) {
//     console.log('This car can drive!')
// } else {
//     console.log('I need a mechanic.')
// }

// Play around with the order of truthy and falsy values below and see what is printed to the console!
// console.log(0 && true)

const hasCreditCard = false
const hasDebitCard = false

// Uncomment the below if else block
// if (hasCreditCard || hasDebitCard) {
//     console.log('Have dinner.')
// } else {
//     console.log('Go hungry.')
// }

// Play around with the order of truthy and falsy values below and see what is printed to the console!
// console.log(false || 1)

/* --------------------- SWITCH PRACTICE --------------------- */

const workLoad = ''

// Add a string to each case that is appropriate for the message in each console log.
// switch (workLoad) {
//   case '':
//     console.log("I'm stressed.")
//     break
//   case '':
//     console.log('I can handle this.')
//     break
//   case '':
//     console.log('Life is good :D')
//   default:
//     console.log('I need a job.')
// }

/* --------------------- BINARY AND UNARY OPERATORS PRACTICE --------------------- */

// let number = 10

// Add 5 to number using binary a operator (+=)
// console.log()
// Subtract 3 from number using a binary operator (-=)
// console.log()

// let counter = 37

// Using unary operators (++ and --), increment counter twice and decrement once.

// console.log(counter)

/* --------------------- WHILE LOOP PRACTICE --------------------- */

let i = 0

// Add a condition to the while loop that will stop the loop at a certain integer.
// function whileLoop() {
//   while () {
//     i += 1
//     console.log('i is', i)
//   }
// }

// whileLoop ()

/* --------------------- ARRAYS PRACTICE --------------------- */

// Array methods list
// .unshift()
// .shift()
// .pop()
// .push()
// .join()
// .includes()
// .indexOf()

const randomPeople = [
  'Philip Seymour Hoffman',
  'Jack White',
  'Samson',
  'Delilah',
  'Will Ferrell'
]

// 1. Remove a value from the end of the array.

// 2. Remove a value from the beginning of the array.

// 3. Add a value to the end of the array.

// 4. Combine the array in one string, separating each name with by a comma.

// 5. Check to see if a value exists in the array.

/* 6. Declare a variable and initialize it with array of any five values of your choice. 
   Write a function that takes in the array as an argument and prints any one of the above 
   challenges to the console. */

// console.log(randomPeople)
