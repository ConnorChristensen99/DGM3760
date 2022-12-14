import mongoose from 'mongoose'

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




////////////////////////////////SERVER TO CLIENT//////////////////////////////////////////////////////////////
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


/////////////////////////////////CLIENT TO SERVER/////////////////////////////////////////////////////////////

app.post('/todos', (req, res) => {
   

})




///////////////////////////////////DATABASES/////////////////////////////////////////////////////////// ///ALL OF THESE GO IN YOUR SERVER FILE WHERE YOU HAVE THE API CALLS

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "process.env.MONGO_URI";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




///This goes at the top of your server file

//const mongoose = require('mongoose');
//require('dotenv').config();
//require('./createUser')
//require('./query')
//require('./update')
//require('./delete')


//const uri = process.env.MONGO_URI;


// mongoose.connect(
//     uri,
//     {
//         useNewUrlParser: true
//     }
// )
//.then(e => console.log('MongoDB Ready!'))
//.catch(console.error)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////THIS SHOULD BE IN A NEW "user.js" FILE//////////
// const {model, Schema} = require('mongoose')

// const User = new Schema({
//     firstName: String,
//     middleName: {
//         type: String,
//         default: ""
//     },
//     lastName: String,
//     age: Number,
//     email: {
//         type: String,
//         required: true
//     }
// })

// module.exports = model('user', User)


///////////////////////////////////////////////////////


/////////////This goes in a newUser.js file//////////////////////////////////////
// const User = require('./user')

// const newUser = new User({
//     firstName: "Connor",
//     middleName: "James",
//     lastName: "Christensen",
//     age: 23,
//     email: "connorwra3@gmail.com"
// })

// newUser.save().then(doc => {
//     console.log("New User Saved")
// })


//////////////////////////////////////////////////////////////////////////////////



/////////////This goes in a query.js file////This pulls from the database//////////////////////////////////
// const User = require('./user')

// const findAllUsers = async() => {
//     const allUsers = await User.find()
//     console.log(allUsers)
// }

// findAllUsers()

// const findUserByName = async(firstName) => {
//     const users = await User.find({firstName})

//      console.log(users)
// }

//findUserByName("Landon")



////////////////////////////////////////////////////////////////////////////



/////////////This goes in a update.js file////This updates the database//////////////////////////////////
// const User = require('./user')

// const incrementAge = async(firstName) => {
//     const user = await User.findOne({firstName})

//     if(!user) {
//         throw new Error('User not Found!')
//     }

//     user.age++

//     const result = await user.save()

    // console.log(result)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////This goes in a delete.js file////This deletes items in the database//////////////////////////////////
// const User = require('./user')

// const deleteUserByFirstName = async(firstName) => {
//     await User.deleteOne({firstName})//won't run unless in database

//     const allUsers = User.find()

//     console.log(allUsers)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////
