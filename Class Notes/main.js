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
    let node = {}

    return {}
}


let myObj = {
    name: 'Connor'
}

myObj.name
myObj['name']//these both return the name - showing the two ways

myObj.eyeColor = 'blue'//This adds that property with that value to the object

let myNewProp = 'height'
myObj.myNewProp = 4//THIS DOESN'T WORK /THIS WILL RETURN myNewProp:4
myObj[myNewProp] = 5//THIS IS HOW YOU DO IT /THIS RESULTS IN Height:5