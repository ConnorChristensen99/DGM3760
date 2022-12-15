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
let addListBtn = document.getElementById('addListFinal')
let addList = document.getElementById('addList')
let addListComplete = document.getElementById('addListComplete')

let removeBtn = document.getElementById('x')
let removeBtns = document.getElementById('y')
let removeBtnz = document.getElementById('z')
let addBookBtn = document.getElementById('addBook')
let findBookBtn = document.getElementById('findBook')

let bodyCards = document.getElementById('interestedCards')

let searchBook = document.getElementById("searchForm")
let searchList = document.getElementById("searchFormList")
let searchedBookSpot = document.getElementById('searchedBooks')
let shareScreen = document.getElementById('shareScreen')
let sendBook = document.getElementById('sendBook')
let sendList = document.getElementById('sendList')

let navList = document.getElementById('navList')



//Displays the books
function displayBooks(interestedBooks) {
    for (let i = 0; i < interestedBooks.length; i++) {
        interestedBooks[i].bookID = i
    }

    bodyCards.innerHTML = ""

    interestedBooks.forEach(book => {
        let bookMarkup = `<div class="newInterested"><img src=${book.image} class="interestedImage" alt="Image of the Book"> 
        <div class="newInterestedInfo"> <h4>${book.title}</h4> <br>
        <p>${book.description}</p></div> 
        <div class="interestedIcon">
                <button id="deleteBtn" onclick="removeBook(${book.bookID})" class="editBtn btn btn-white btn-animate" type="button">Delete</button> 
                <button id="shareBtn" onclick="showScreen()" class="editBtn btn btn-white btn-animate" type="button">Share with Friends</button> 
                
            </div>`

            bodyCards.insertAdjacentHTML('beforeend', bookMarkup)
    })

    
}

displayBooks(interestedBooks)

//Changes the list for the user
function changeList(elem){
    console.log(elem)
    console.log(navList)
}


//Shows the share screen
function showScreen() {
    shareScreen.classList.remove('invisible')
}
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
        displayBooks(interestedBooks)
        window.location.reload() 
    }) 
}
 

//Displays the Add A Book Form
addBtn.addEventListener('click', event => {
    searchForm.classList.remove('invisible')
    searchedBookSpot.textContent = ""
})

sendBook.addEventListener('click', event => {
    shareScreen.classList.add('invisible')
})

addListBtn.addEventListener('click', event => {
    addList.classList.remove('invisible')
})

addListComplete.addEventListener('click', event => {
    addList.classList.add('invisible')

    navList.insertAdjacentHTML('beforeend', `<li class="nav2 navItem"><a onclick="changeList(searchList.value)" href="#">${searchList.value}</a></li>`)

})

sendList.addEventListener('click', event => {
    shareScreen.classList.remove('invisible')
})
//Removes the Add A Book Form
removeBtn.addEventListener('click', event => {
    searchForm.classList.add('invisible')
})
removeBtns.addEventListener('click', event => {
    shareScreen.classList.add('invisible')
})
removeBtnz.addEventListener('click', event => {
    addList.classList.add('invisible')

})
 

//Finds a book
findBookBtn.addEventListener('click', event => {
    let id = interestedBooks.length
    fetch('/possibleBooks', {
        method: 'POST',
        body: JSON.stringify({bookTitle: searchBook.value}),
        headers: {
            'Content-Type': 'application/json' 
        }
    }) 
    .then(res => res.json()) 
    .then(data =>  { 
        data.forEach((book)=>{
            let description = book.description
            let title = book.title
            let bookid = book.id

            let li = document.createElement("li");
            let ul = document.createElement("ul");
            ul.classList.add('searchedUL')

            ul.appendChild(li)

            li.classList.add('searchedItems');
            li.innerText = bookid + ".  " + title;

            li.addEventListener('click', event => {
                searchForm.classList.add('invisible')
                let image = book.image.thumbnail
                
                interestedBooks.push( {
                        bookID: id,
                        title: event.target.innerText,
                        description: description,
                        image: image
                })
               
                fetch('/books', {
                    method: 'POST',
                    body: JSON.stringify({title: title, description: description, image: image, bookID: id}),
                    headers: {
                        'Content-Type': 'application/json' 
                    }
                }).then(res => res.json())
                .then(data => {(displayBooks(interestedBooks))})
                window.location.reload()
            })
            searchedBookSpot.append(ul);
          })
    })
})




getBooks().then( books => {
    displayBooks(books)
})




