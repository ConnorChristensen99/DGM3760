//Interested Books JS
let interestedBooks = [
    {
        bookID: 0,
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort.',
        image: "src/images/orderofthephoenix.jpg"
    }
]

async function getBooks() {
    let response = await fetch('/books')
    let data = await response.json()

    return data; 
}


let searchForm = document.getElementById('search-form')
let addBtn = document.getElementById('add-book-btn')

let removeBtn = document.getElementById('x')
let addBookBtn = document.getElementById('addBook')
let findBookBtn = document.getElementById('findBook')

let bodyCards = document.getElementById('interestedCards')

let searchBook = document.getElementById("searchForm")
let searchedBookSpot = document.getElementById('searchedBooks')




//Displays the books
function displayBooks(interestedBooks) {
    bodyCards.innerHTML = ""

    interestedBooks.forEach(book => {
        let bookMarkup = `<div class="newInterested"><img src=${book.image} class="interestedImage" alt="Image of the Book"> 
        <div class="newInterestedInfo"> <h4>${book.title}</h4> <br>
        <p>${book.description}</p></div> 
        <div class="interestedIcon">
                <button id="deleteBtn" onclick="removeBook(${book.bookID})" class="editBtn btn btn-white btn-animate" type="button">Delete</button>
                
            </div>`

            bodyCards.insertAdjacentHTML('beforeend', bookMarkup)
    })

    
}

displayBooks(interestedBooks)


// //Removes item from the page when clicked
function removeBook(id) {

    fetch('/books', {
        method: 'DELETE',
        body: JSON.stringify({bookID: id}),
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

 
    displayBooks(interestedBooks)
}


//Displays the Add A Book Form
addBtn.addEventListener('click', event => {
    searchForm.classList.remove('invisible')
    searchedBookSpot.innerText = ""
})


//Removes the Add A Book Form
removeBtn.addEventListener('click', event => {
    searchForm.classList.add('invisible')
})
 

//Finds a book
findBookBtn.addEventListener('click', event => {

    console.log(searchBook.value)
    fetch('/books', {
        method: 'POST',
        body: JSON.stringify({bookTitle: searchBook.value}),
        headers: {
            'Content-Type': 'application/json' 
        }
    }) 
    .then(res => res.json())
    .then(data =>  { 
        console.log(data)

        data.forEach((book)=>{
            let description = book.description
            let title = book.title
            
            let li = document.createElement("li");
            let ul = document.createElement("ul");
            ul.classList.add('searchedUL')

            ul.appendChild(li)

            li.classList.add('searchedItems');
            li.innerText = title;

            li.addEventListener('click', event => {
                searchForm.classList.add('invisible')


                interestedBooks.push( {
                        bookID: interestedBooks.length,
                        title: event.target.innerText,
                        description: description,
                        image: book.image.thumbnail
                })
                displayBooks(interestedBooks)
            })
            searchedBookSpot.append(ul);
          })
    })

})




getBooks().then( books => {
    displayBooks(books)
})




