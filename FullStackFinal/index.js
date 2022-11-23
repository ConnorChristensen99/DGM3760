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
const API = process.env.API_KEY;

fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&${API}`)
  .then(response => response.json())
  .then(result => {
 console.log(result.items)
})




let interestedBooks = [
    {
        bookID: 0,
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort.',
        image: "src/images/orderofthephoenix.jpg"
    }
]

let reviews = [
    {
        reviewID: 0,
        title: 'Harry Potter and the Order of the Phoenix',
        review: 'In their new book, Renee Dudley and Daniel Golden explain how a ragtag band of international tech nerds have defended the defenseless against cybercrime0. In their new book, Renee Dudley and Daniel Golden explain how a ragtag band of international tech nerds have defended the defenseless against cybercrime.',
        image: "images/orderofthephoenix.jpg",
        rating: 4
    }
]




// Display Books to be Read
app.get('/books', (req, res) => {
    res.send(interestedBooks)
})



app.post('/books', (req, res) => {

    const todo = req.body.todo
    console.log(todo)

    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    

    interestedBooks.push({
        bookID: interestedBooks.length,
        title: title,
        description: description,
        image: image
    })

    res.send(interestedBooks)
})






app.delete('/books', (req, res) => { 
 
})





//Display Reviews
app.get('/reviews', (req, res) => {
    res.send(reviews)
})



app.post('/reviews', (req, res) => {


})





app.put('/reviews', (req, res) => { 
 
    
    
})





app.delete('/reviews', (req, res) => { 
 
})







app.listen(port, () => {
    console.log("It's Go Time")
})