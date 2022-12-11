
// Reviews JS
let reviews = [
    {
        reviewID: 0,
        title: 'Harry Potter and the Order of the Phoenix',
        review: 'In their new book, Renee Dudley and Daniel Golden explain how a ragtag band of international tech nerds have defended the defenseless against cybercrime0. In their new book, Renee Dudley and Daniel Golden explain how a ragtag band of international tech nerds have defended the defenseless against cybercrime.',
        image: "images/orderofthephoenix.jpg",
        rating: 4
    }
]




async function getReviews() {
    let response = await fetch('/reviews')
    let data = await response.json()
    return data; 
}



let searchForm = document.getElementById('search-form')
let addBtn = document.getElementById('add-review-btn')
let reviewForm = document.getElementById('review-form')
let placeHolder = document.getElementById('reviewFormPlaceholder')


let removeBtn = document.getElementById('x')
let addReviewBtn = document.getElementById('addBook')
let backBtn = document.getElementById('back')

let bodyCards = document.getElementById('reviewCards')

let starRating = document.getElementById('rating')
let editedStarRating = document.getElementById('editRating')
let stars = starRating.getElementsByTagName('span')
let newSStars = editedStarRating.getElementsByTagName('span')

let reviewText = document.getElementById('reviewText')
let newReviewText = document.getElementById('newReviewText')


let editBtn = document.getElementById('editBtn')
let addReview = document.getElementById('addReview')

let searchedBookSpot = document.getElementById('searchedBooks')
let findBookBtn = document.getElementById('findBook')
let searchBook = document.getElementById("searchForm")



 

//Displays the Stars
function displayStars(rating) {         
let newStars = []
    
    for (let i=0; i < rating; i++) {

        if (i < rating) {
             star = `<span class="fa fa-star fa-2x reviewStars checked"></span>`
        }if( i > rating) {                                                      
             star = `<span class="fa fa-star reviewStars fa-2x"></span>`
        }
         newStars.push(star)
     }   

        return newStars.join("")

}






//Display the selected Review for edit    
function editReview(id) {
    reviewForm.classList.remove('invisible')

    let thisReview = reviews.find(review => id == review.reviewID)

    let thisReviewID = thisReview.reviewID
    placeHolder.placeholder = thisReview.title
    newReviewText.textContent = thisReview.review

    addReview.addEventListener('click', event => {
        reviewForm.classList.add('invisible')
            //Handles finding the new rated star
            let starIDArr = []
            for (let i=0; i < newSStars.length; i++) {
            let starID = (newSStars.item(i).classList.contains('checked'))
           if(starID == true) {
            starIDArr.push(starID)
           }
        }
    
        thisReview.rating = starIDArr.length
        newReviewText.textContent = newReviewText.value
        thisReview.review = newReviewText.textContent


        fetch('/reviews', {
            method: 'PUT', 
            body: JSON.stringify({bookID: thisReviewID, newReview: thisReview.review, newStars: thisReview.rating}),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            displayReviews(reviews)  
        })
   
    })
}






// //Removes item from the page when clicked
function removeReview(id) {

    fetch('/reviews', {
        method: 'DELETE',
        body: JSON.stringify({bookID: id}),
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayReviews(reviews)
        window.location.reload()
    })
}








//Displays the reviews
function displayReviews(reviews) {
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].reviewID = i
    }
    
    bodyCards.innerHTML = ""

    reviews.forEach(review => {
        let reviewMarkup = `<div class="newReview"><img src=${review.image} class="reviewImage" alt="Image of the Book" style="width:150px;height:150px;"> 
        <div class="newReviewInfo"> <div id="stars-bottom"><h4>${review.title}</h4> <br>
       <p>${review.review}</p><button id="editBtn" onclick="editReview(${review.reviewID})" class="editBtn btn btn-white btn-animate" type="button">Edit</button> <button id="deleteBtn" onclick="removeReview(${review.reviewID})" class="editBtn btn btn-white btn-animate" type="button">Delete</button></div>`
            
            
            bodyCards.insertAdjacentHTML('beforeend', reviewMarkup)

            bodyCards.insertAdjacentHTML('beforeend', displayStars(review.rating))
            
    }) 

}
displayReviews(reviews)










//Handles the Star Rating

function selectStars(targetID) {
    for (let x=0; x < targetID; x++) {
        stars[x].classList.add('checked')
        newSStars[x].classList.add('checked')
}
}


for (let i=0; i<stars.length; i++) {
    starRating.addEventListener('click', function handleClick(event) { 
        stars[i].classList.remove('checked')
        let target = event.target
        targetID = target.id

        selectStars(targetID)

       
})}

for (let i=0; i<newSStars.length; i++) { 
    editedStarRating.addEventListener('click', function handleClick(event) { 
        newSStars[i].classList.remove('checked')
        let target = event.target
        targetID = target.id

        selectStars(targetID)

       
})}











//Displays the Add A Review Form
addBtn.addEventListener('click', event => {
    searchForm.classList.remove('invisible')
})
//Removes the Add A Review Form
removeBtn.addEventListener('click', event => {
    searchForm.classList.add('invisible')
})
//Removes the Add A Review Form
backBtn.addEventListener('click', event => {
    reviewForm.classList.add('invisible')
})


//Finds a Book to review
findBookBtn.addEventListener('click', event => {


    fetch('/possibleReviews', {
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
            let title = book.title
            let bookid = book.id
            
            let li = document.createElement("li");
            let ul = document.createElement("ul");
            ul.classList.add('searchedUL')

            ul.appendChild(li)

            li.classList.add('searchedItems');
            li.innerText = bookid + ".  " + title;

            li.addEventListener('click', event => {

                searchedBookSpot.innerText = ""

                searchBook.value = event.target.innerText

                 //Adds a Review and removes the form  
            addReviewBtn.addEventListener('click', event => {
                searchForm.classList.add('invisible')
    
             let starIDArr = []
              for (let i=0; i < stars.length; i++) {
                let starID = (stars.item(i).classList.contains('checked'))
                if(starID == true) {
                    starIDArr.push(starID)
                   }
                }

                let reviewID = reviews.length
                let title = book.title
                let review = reviewText.value
                let image = book.image.thumbnail
                let rating = starIDArr.length

              reviews.push({
                  reviewID: reviewID,
                  title: title, 
                  review: review,
                  image: image,
                  rating: rating
                })                                                          
     
              displayReviews(reviews)

              fetch('/reviews', {
                method: 'POST',
                body: JSON.stringify({title: title, review: review, image: image, reviewID: reviewID, rating: rating}),
                headers: {
                    'Content-Type': 'application/json' 
                }
            }).then(res => res.json())
            .then(data =>{displayReviews(data)})
         })
             })
            searchedBookSpot.append(ul);
        })
    })
})




getReviews().then( reviews => {
    displayReviews(reviews)
})
