
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
    console.log(data)
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
             star = `<span class="fa fa-star fa-2x checked"></span>`
        }if( i > rating) {                                                      
             star = `<span class="fa fa-star fa-2x"></span>`
        }
         newStars.push(star)
     }   

        return newStars.join("")

}






//Display the selected Review for edit    
function editReview(id) {
    reviewForm.classList.remove('invisible')


    let thisReview = reviews.find(review => id == review.reviewID)



    placeHolder.placeholder = thisReview.title
    newReviewText.textContent = thisReview.review

    addReview.addEventListener('click', event => {
        reviewForm.classList.add('invisible')
    
        newReviewText.textContent = newReviewText.value

    
    
        thisReview.review = newReviewText.textContent

        

        //Handles finding the new rated star
        let starIDArr = []
        for (let i=0; i < newSStars.length; i++) {
        let starID = (newSStars.item(i).classList.contains('checked'))
       if(starID == true) {
        starIDArr.push(starID)
       }
    }

    thisReview.rating = starIDArr.length

    displayReviews(reviews)  
    })
}






//Removes the Review
function removeReview(id) {
    reviews.splice(id, 1)
    displayReviews(reviews)
}








//Displays the reviews
function displayReviews(reviews) {
    
    bodyCards.innerHTML = ""

    reviews.forEach(review => {
        let reviewMarkup = `<div class="newReview"><img src=${review.image} class="reviewImage" alt="Image of the Book"> 
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
    searchedBookSpot.innerText = ""
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

    fetch('/reviews', {
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
                console.log(searchBook)
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
    
    
              reviews.push({
                  reviewID: reviews.length,
                  title: book.title,
                  review: reviewText.value,
                  image: book.image.thumbnail,
                  rating: starIDArr.length
                })                                                          
    
              displayReviews(reviews)
         })
             })
            searchedBookSpot.append(ul);
        })
    })
})




getReviews().then( reviews => {
    displayReviews(reviews)
})
