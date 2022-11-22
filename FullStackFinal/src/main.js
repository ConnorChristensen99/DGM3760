

//Interested Books JS
let interestedBooks = [
    {
        bookID: 0,
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort.',
        image: "src/images/orderofthephoenix.jpg"
    }
]


let searchForm = document.getElementById('search-form')
let addBtn = document.getElementById('add-book-btn')

let removeBtn = document.getElementById('x')
let addBookBtn = document.getElementById('addBook')

let bodyCards = document.getElementById('interestedCards')




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
    console.log(interestedBooks)

    interestedBooks.splice(id, 1)



    displayBooks(interestedBooks)
}


//Displays the Add A Book Form
addBtn.addEventListener('click', event => {
    searchForm.classList.remove('invisible')
})


//Removes the Add A Book Form
removeBtn.addEventListener('click', event => {
    searchForm.classList.add('invisible')
})

//Adds a book and removes the form
addBookBtn.addEventListener('click', event => {
    searchForm.classList.add('invisible')

    interestedBooks.push({
        bookID: interestedBooks.length,
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort.',
        image: "src/images/orderofthephoenix.jpg"
    })

    displayBooks(interestedBooks)
})



