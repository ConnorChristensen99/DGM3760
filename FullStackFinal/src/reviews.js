
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


let searchForm = document.getElementById('search-form')
let addBtn = document.getElementById('add-review-btn')

let removeBtn = document.getElementById('x')
let addReviewBtn = document.getElementById('addBook')

let bodyCards = document.getElementById('reviewCards')

let starRating = document.getElementById('rating')
let stars = starRating.getElementsByTagName('span')

let reviewText = document.getElementById('reviewText')


//Displays the reviews
function displayReviews(reviews) {
    bodyCards.innerHTML = ""

    reviews.forEach(review => {
        let reviewMarkup = `<div class="newReview"><img src=${review.image} class="reviewImage" alt="Image of the Book"> 
        <div class="newReviewInfo"> <div id="stars-bottom"><h4>${review.title}</h4> <br>
        <p>${review.review}</p></div>
        <div class="rating">
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x checked"></span>
            <span class="fa fa-star fa-2x "></span>
                </div>
                </div>
            </div>`



            bodyCards.insertAdjacentHTML('beforeend', reviewMarkup)
    })

}

displayReviews(reviews)


//Handles the Star Rating

function selectStars(targetID) {
    for (let x=0; x < targetID; x++) {
        stars[x].classList.add('checked')
}
}


for (let i=0; i<stars.length; i++) {
    starRating.addEventListener('click', function handleClick(event) { 
        stars[i].classList.remove('checked')
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
        title: 'Harry Potter and the Order of the Phoenix',
        review: reviewText.value,
        image: "images/orderofthephoenix.jpg",
        rating: starIDArr.length
    })                                                          //Just need to get this value to show the amount of selected stars

    displayReviews(reviews)
    
})

