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
const todoSchema = new Schema({
    id: Number,
    name: String,
    status: {
        type: Boolean,
        default: false
    },
    category: String
})

const Todo = model("todo", todoSchema)


//Category Schema
const categorySchema = new Schema ({
    name: String
})

const Category = model('category', categorySchema)


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


    ////Add New Todo IN DATABASE

const newTodo = new Todo({
    id: todos.length,
    name: todo,
    status: false,
    category: category,
})

newTodo.save().then(doc => {
    console.log("New Todo Saved")
})

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

    // ////Updates the Database

const editTodo = async(updatedID) => {
    const todo = await Todo.findOne({updatedID})

    if(!todo) {
        throw new Error('Todo not Found!')
    }

    todo.todoText = updatedtodoText

    const result = await todo.save()

    console.log(result)
}

 
    
    
})





app.delete('/todos', (req, res) => { //DONE 
    const badTodo = req.body.todoID 
    console.log(badTodo)
    todos.splice(badTodo, 1)  
                                                                                    
    res.send(todos) 


    ////Deletes Items in  the database
const deleteTodo = async(badTodo) => {
    await Todo.deleteOne({badTodo})    
}   

 
})





///////Categories////////
app.get('/categories', (req, res) => {//DONE
    res.send(categories)
})

 


app.post('/categories', (req, res) => {//DONE
    const category = req.body.category
    categories.push(category)

    

    res.send(categories)



    const newCategory = new Category({
        name: category
    })
    
    newCategory.save().then(doc => {
        console.log("New Category Saved")
    })


})




app.put('/categories', (req, res) => {
    const updatedCategories = req.body.newCategory


    categories.splice(categories, categories.length, updatedCategories)
    let newCategories = categories.flat(1)

    console.log(newCategories)

    res.send(newCategories)
 
    
    
})






app.delete('/categories', (req, res) => {//DONE
    const badCategory = req.body.id
    categories.splice(badCategory, 1)

    res.send(categories)
    
    
    const deleteCategory = async(badCategory) => {
        await Category.deleteOne({badCategory})
    }  
    deleteCategory()
})
 





app.listen(port, () => {//DONE
    console.log("It's Go Time")
})