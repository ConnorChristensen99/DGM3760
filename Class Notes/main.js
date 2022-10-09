//Primitive
let myName = 'Landon'

let myNum = 3456

let myUndefined = undefined //NEVER DO THIS
let myUndefinedd //Do it this way if you ever do this

let myNull = null

let myBool = true

let myBigint = (9007199254740992)


//Structural

//objects have properties (values) and are stored by reference
let user = {
    name: 'Connor',
    age: 23,
    isParent: false
}

let myUserCopy = user //This is a reference not a copy of the object. They are both just pointing to the SAME object
let myNewUserCopy = {...user} //This is a direct copy of objects/arrays where they are not pointing to the same object but cloned it

//arrays have indexes (orders)
let myArray = [
    'apple',
    'banana',
    'peach',
    'kiwi'
]




let yourArray = [1,2,3,4,5,6,7,8,9,0]

for(let i = 0; i < yourArray.length; i++) {
    yourArray [i]
}

for(const num of yourArray){
    num
}

yourArray.forEach((num, idx, arr) => {
     num
     idx
     arr
})

for(const key in user) {
    key //returns the categories not the values
}


//Operators
5 % 2 //This is the remainder operator and it = 1
52 ** 52 //This is how you use exponents

//Turinary Operator
let legal = (age >= 18) ? 'adult':'minor'



//functions
function showMessage(from, message) {
    console.log(from + message)
    return `${from} ${message}`
}

//default values can be set in functions to add a possible unneeded value and default to the given value if no other arg is given to fulfill it
function showMessage(from, message = 'no text') {
    console.log(from + message)
    return `${from} ${message}`
}

//functions can be called without the function keyword
const arrowExample = (from, message) => {return `${from} ${message}`}

//functions can also be expressions
const expressionExample = function (from,message) {
    return `${from} ${message}`
}


//This is what the .forEach() is doing
let myArr = [1,2,3]
function myForEach (arr, cb) {
    for(let i = 0; i < arr.length; i++) { 
        cb(arr[i])
    }
}

myForEach(myArr, (num) => {
    console.log(num)
})



////////////////////////////////////////////////////////////////////////////////////////////////

//filter - assume you have an array 'wizards' filled with names and houses as objects inside
let gryfindors = wizards.filter(wizard => {
    return wizard.house ==="Gryfindor" //this will return true or false if they are Gryfindor as their house
})
gryfindors // Calling this gives the objects that are Gryfindors


//findIndex
let firstGryf = wizards.findIndex(wizard => wizard.house === "Gryfindor")//If you have the ID you can have this function find the ID and take it

firstGryf //this will return 0 as the first person in the list is Gryfindor. THIS STOPS AT FIRST FOUND ITEM

//changing array methods
let gryfindorWizardNames = wizards.filter(wizard => wizard.house ==="Gryfindor").map(wizard => wizard.name)//this creates a new array with all students who are Gryfindors

//look at makeTree - Advanced Functions Assignment //Recursive Functions will be needed
function makeTree(arr, parent) {
    let node = {};

    let filteredArray = arr.filter((item) => { 
        return item.parent === parent
    })

    filteredArray.forEach((item) => {
        node[item.id] = makeTree(arr, item.id)
    })


    return node
}



////
let myObj = {
    name: 'Connor'
}

myObj.name
myObj['name']//these both return the name - showing the two ways

myObj.eyeColor = 'blue'//This adds that property with that value to the object

let myNewProp = 'height'
myObj.myNewProp = 4//THIS DOESN'T WORK /THIS WILL RETURN myNewProp:4
myObj[myNewProp] = 5//THIS IS HOW YOU DO IT /THIS RESULTS IN Height:5


//////////////////////////////////////////////////////////////////////////////////////////////



let todoUL = document.querySelector('.todoList'); 
let todoInput = document.querySelector('#newInput')
let addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', event => {
    let todoText = todoInput.value
    addTodo(todoText)
    displayTodos(todos)
})

todoUL.addEventListener('click', (event) => {
    console.log(event.target.dataset.todoid)
    let todoID = event.target.dataset.todoid
    completeTodo(todoID)
    displayTodos(todos)
})

function completeTodo(id) {
    let todoIdx = todos.findIndex(todo => todo.todoID === id)

    todos[todoIdx].todoComplete = !todos[todoIdx].todoComplete
}

function addTodo(todoText) {
    let newTodo = {
        todoID: todos.length + 1,
        todoText: todoText,
        todoComplete: false
    }
    todos.push(newTodo)
}

function displayTodos(todos) {
    todoUL.innerHTML = ""

    todos.forEach(todo => {
        let done = todo.todoComplete ? "done" : "";
        let todoMarkup = `<li class="${done}" data-todoID = '${todo.todoID}'>
                            ${todo.todoText}<span> <i class="fa fa-trash"></i></span>
                            </li>`

        todoUL.insertAdjacentHTML('beforeend', todoMarkup)
    })
}




//////////////////////////////////////////////////////////////////////////////////////////////
//NODE TUTORIAL
const http = require('http')

const hostname = '127.0.0.1'
const port2 = 8000

const server = http.createServer((req, res) => { //we are saying we are expecting a request and response
    res.statusCode = 200
    res.end('Hello World')
})

server.listen(port2, hostname, () => {
    console.log('server running')
})

//Rest API show you a representation of the app and not the base look

let categories = [...new Set(initialTodos.map(todo => todo.category))]
    .map((cat,idx) => ({
        category: cat,
        id: idx,
        selected: false
    }))

//Node takes the JS language and stick it into a different runtime meaning it takes all the code out of the browser and stick it into your OS
//server code
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Example Running')

})


app.get('/todos', (req, res) => {
    res.send(Todos)
})

app.post('/todos', (req, res) => {
    todos.push( {
        id: 4,
        todo: req.query.todo,
        complete: false,
        category: 'none'
    })

})

//js code //instead of displaying todos, you need to call this and do getTodos().then(todos => {displayTodos(todos)})
async function getTodos() {
    let response = await fetch('/todos')
    let data = await response.json()

    return data
}


//////////////////////////////////////////////////////////////////////////////////////////////


//advanced functions copy and paste if i cant push it

//RECURSION

//Write a function sumTill(n) that will sum till n. (Must use Recursion)
// example inputs and outputs
// sumTill(1) //1
// sumTill(2) // 2 + 1 = 3
// sumTill(3) // 3 + 2 + 1 = 6
// sumTill(100) // 100 + 99 + 98 ... + 2 + 1 = 5050
// BONUS 1 point extra credit: There is a much simpler way to do this! (Hint: it is NOT a loop, or recursion) Write a function that is faster than recursion.

function sumTill(n){
    if (n <= 1){
        return n;}
        else {
            return n + sumTill(n-1)
        }

}

console.log(sumTill(5)); //15



let data = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'retreiver', parent: 'dogs' },
    { id: 'corgi', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
    { id: 'maineCoon', parent: 'cats' }
];

//write a function: makeTree(obj) that takes a flat data stucture, as seen above, and return a tree strucuture as seen below. Must use recursion.

function makeTree(arr, parent) {
    let node = {};

    let filteredArray = arr.filter((item) => { 
        return item.parent === parent
    })

    filteredArray.forEach((item) => {
        node[item.id] = makeTree(arr, item.id)
    })


    return node
}

console.log('making tree')
console.log(
    //makes the output readable... Handy trick for outputing objects in the console.
    JSON.stringify(
        makeTree(data, null)
        , null, 2
    )
)

let reutrn = {
    animals: {
        mammals: {
            dogs: {
                labrador: {},
                retreiver: {},
                corgi: {},
            },
            cats: {
                persian: {},
                siamese: {},
                maineCoon: {}
            }
        }
    }
}


// SCOPES and CLOSURES

//write 2 functions to be used as a filter for Array.filter()
// Function between(a, b) should take two numbers and filter an array of numbers to only values between the function parameters
//function inArr() should take an array of numbers and filter an array of numbers to ONLY numbers that are in the array passes to inArr()
//Hint: both of these functions will return functions for the Array.filter() to use.


function between(a, b){
    let i = a;
    let b = b;
    
    if (i <= b) {
        return between(a++,b)
    }
}


function inArr(arr) {

}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//uncomment out these lines when working on and turning in this section. They are currently commented out due to errors
 console.log(arr.filter(between(2, 7))); // 2, 3, 4, 5, 6, 7

 //console.log(arr.filter(inArr([4, 5, 7, 8, 9, 12, 14]))) // 4, 5, 7, 8, 9



// REST PARAMETERS and SPREAD Syntax

//write a function, sumAll() that can take any number of parameters and add them all together
// Must use Rest Parameters (Rest Arguments)
function sumAll(...theSums) {
    let total = 0;
    for (let arg of theSums) {
        total += arg
    }
    return total;
}

console.log('sumAll', sumAll(1)) // 1
console.log('sumAll', sumAll(1, 2)) // 3
console.log('sumAll', sumAll(1, 2, 3)) // 6

// Use the spread operator to pass arr into your sumAll function

console.log('sumAll Spread', sumAll(...arr));

//write a function combineArr() that accepts 2 arrays, and combines them into a single array using the spread operator

function combineArr(arr1, arr2) {
    return [...arr1, ...arr2]
}

let arrFirst = [1, 2, 3];
let arrSecond = [4, 5, 6];

console.log(combineArr(arrFirst, arrSecond)) // [1, 2, 3, 4, 5, 6]

export {
    sumTill,
    makeTree,
    between,
    inArr,
    sumAll,
    combineArr
}