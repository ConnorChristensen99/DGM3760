const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(express.static('client'))
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

let todos = [
    {
        todoID: 0,
        todoText: "Finish Homework",
        todoComplete: false,
        todoCategory: "School"
    },
    {
        todoID: 1,
        todoText: "Do Dishes", 
        todoComplete: false,
        todoCategory: "Home"
    }, 
    {
        todoID: 2,
        todoText: "Wash Car",
        todoComplete: false,
        todoCategory: "Extra Work"
    }
]

let categories = ["School","Home","Extra Work"]

///////ToDos////////
app.get('/todos', (req, res) => {//If I see a get request here then I will run this function
    res.send(todos)
})

app.post('/todos', (req, res) => {//If I see a post request at this request then I will run this function
    const todo = req.body.todo
    const category = req.body.todoCategory
    todos.push( {
        todoID: todos.length,
        todoText: todo,
        todoComplete: false,
        todoCategory: category
    })

    res.send(todos)

})

app.put('/todos', (req, res) => {
    const todo = req.body.id
    const todoText = req.body.todo

    let tobeUpdated = todos.findIndex(todo)

    todos.splice(tobeUpdated, 1, todoText)

    res.send(todos)
 
})



app.delete('/todos', (req, res) => {
    const todo = req.body.id
    let tobeDeleted = todos.findIndex(todo)

    todos.splice(tobeDeleted, 1)

    res.send(todos)
})

///////Categories////////
app.get('/categories', (req, res) => {
    res.send(categories)
})

app.post('/categories', (req, res) => {
    const category = req.body.category
    categories.push(category)

    res.send(categories)

})

app.put('/categories', (req, res) => {
    const category = req.body.id
    const categoryText = req.body.category

    let tobeUpdated = categories.findIndex(category)

    categories.splice(tobeUpdated, 1, categoryText)


    res.send(categories)
 
})



app.delete('/categories', (req, res) => {
    const category = req.body.id
    let tobeDeleted = categories.findIndex(category)

    categories.splice(tobeDeleted, 1)

    res.send(categories)
})


