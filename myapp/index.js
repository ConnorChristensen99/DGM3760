const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(express.static('client'))
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const cors = require('cors')
app.use(cors({
 origin: '*'
}))

require('dotenv').config();
const mongoose = require('mongoose');






const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("Connected to Mongo")
//   client.close();
// });


mongoose.connect(
    uri,
    {
        useNewUrlParser: true
    }
)
.then(e => console.log('MongoDB Ready!'))
.catch(console.error)








const {model, Schema} = require('mongoose')




// ////Todos Schema
const Todo = new Schema({
    id: Number,
    name: String,
    status: {
        type: Boolean,
        default: false
    },
    category: String
})




// ////Add New Todo

// const newTodo = new Todo ({
//     id: 0,
//     name: "Dishes",
//     status: false,
//     category: "School",
// })

// newTodo.save().then(doc => {
//     console.log("New Todo Saved")
// })






// ////Pulls from the database to give Todos

// const findallTodos = async() => {
//     const allTodos = await Todo.find()
//     console.log(allTodos)
// }

// findallTodos()

// const findTodoByName = async(name) => {
//     const todos = await Todo.find({name})

//      console.log(todos)
// }

// findTodoByName("Dishes")






// ////Updates the Database

// const editName = async(name) => {
//     const todo = await Todo.findOne({name})

//     if(!todo) {
//         throw new Error('Todo not Found!')
//     }

//     todo.name = Updated

//     const result = await todo.save()

//     console.log(result)
// }





// ////Deletes Items in  the database

// const deleteTodo = async(name) => {
//     await Todo.deleteOne({name})      //won't run unless in database

//     const allTodos = Todo.find()

//     console.log(allTodos)
// }










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

let categories = ["School", "Home", "Extra Work"]




///////ToDos////////
app.get('/todos', (req, res) => {//If I see a get request here then I will run this function   //DONE
    res.send(todos)
})

app.post('/todos', (req, res) => {//If I see a post request at this request then I will run this function    //DONE
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

app.put('/todos', (req, res) => { //DONE
    const updatedID = req.body.id
    const updatedtodoText = req.body.todo

    for (let i = 0; i < todos.length; i++) {
     
        const elem = todos[i];

        if(elem.todoID == updatedID) {
            elem.todoText = updatedtodoText

            console.log(todos)
        }
        
        
    }
 
    res.send(todos)
 
    
    
})



app.delete('/todos', (req, res) => { //DONE
    const badTodo = req.body.todoID 

    todos.splice(badTodo, 1)  
                                                                                    
    res.send(todos)

})





///////Categories////////
app.get('/categories', (req, res) => {//DONE
    res.send(categories)
})


app.post('/categories', (req, res) => {//DONE
    const newCategory = req.body.category
    categories.push(newCategory)

    

    res.send(categories)


})


app.put('/categories', (req, res) => {
    const updatedCategories = req.body.newCategory
    let newCategories = []

    console.log(updatedCategories)

    newCategories.push(updatedCategories)

    console.log(newCategories)

    res.send(newCategories)
 
    
    
})



app.delete('/categories', (req, res) => {//DONE
    const badCategory = req.body.id
    console.log(badCategory)


    categories.splice(badCategory, 1)

    res.send(categories)
    console.log(categories)
})
 



app.listen(port, () => {//DONE
    console.log("It's Go Time")
})