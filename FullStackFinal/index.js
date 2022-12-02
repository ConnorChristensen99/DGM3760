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









//Gets the books from the API
require('dotenv').config();
const API = process.env.API_KEY;

// fetch(`https://www.googleapis.com/books/v1/volumes?q=old+cars&${API}`)
//   .then(response => response.json())
//   .then(result => {
//     for(let i=0; i < result.items.length; i++) {
//         console.log(result.items[i].volumeInfo.title)
//         console.log(result.items[i].volumeInfo.description)
//         console.log(result.items[i].volumeInfo.imageLinks) 

//     }

   
// })












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


 
app.post('/possibleBooks', (req, res) => {
    let possibleBooks = [{}]

    let title = req.body.bookTitle

    //finds books that match the given word
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&${API}`)
  .then(response => response.json())
  .then(result => {
    for(let i=1; i < result.items.length; i++) {
        possibleBooks.push({
            title: result.items[i].volumeInfo.title,
            description: result.items[i].volumeInfo.description,
            image: result.items[i].volumeInfo.imageLinks
        })
    }
 
    res.send(possibleBooks)
}) 
})

app.post('/books', (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let bookID = req.body.bookID
    let image = req.body.image
  
    interestedBooks.push( {
        bookID: bookID,
        title: title,
        description: description,
        image: image
})
    res.send(interestedBooks)
})


 



app.delete('/books', (req, res) => { 
 let bookID = req.body.bookID
 interestedBooks.splice(bookID, 1)

 res.send(interestedBooks)
})









//Display Reviews
app.get('/reviews', (req, res) => {
    res.send(reviews)
})

app.post('/possibleReviews', (req, res) => {
    let possibleBooks = [{}]

    let title = req.body.bookTitle

    //finds books that match the given word

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&${API}`)
  .then(response => response.json())
  .then(result => {
    for(let i=1; i < result.items.length; i++) {
        possibleBooks.push({
            title: result.items[i].volumeInfo.title,
            description: result.items[i].volumeInfo.description,
            image: result.items[i].volumeInfo.imageLinks
        })
    }
 
    res.send(possibleBooks)
}) 
})



app.post('/reviews', (req, res) => {
    let title = req.body.title
    let review =req.body.review
    let image = req.body.image
    let reviewID = req.body.reviewID
    let rating = req.body.rating

    reviews.push({
        reviewID: reviewID,
        title: title, 
        review: review,
        image: image,
        rating: rating
      })     

      res.send(reviews)

}) 



app.put('/reviews', (req, res) => { 
 
    
    
})





app.delete('/reviews', (req, res) => { 
    let bookID = req.body.bookID
    reviews.splice(bookID, 1)
   
    res.send(reviews)
   })
   







app.listen(port, () => {
    console.log("It's Go Time")
})