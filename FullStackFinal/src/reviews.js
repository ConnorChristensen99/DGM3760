
// Reviews JS
// let reviews = [
//     {
//         reviewID: 0,
//         title: 'Harry Potter and the Order of the Phoenix',
//         description: 'Now in his fifth year at Hogwarts, Harry (Daniel Radcliffe) learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort.',
//         image: "src/images/orderofthephoenix.jpg"
//     }
// ]


let searchForm = document.getElementById('search-form')
let addBtn = document.getElementById('add-review-btn')

let removeBtn = document.getElementById('x')
let addReviewBtn = document.getElementById('addBook')

let bodyCards = document.getElementById('reviewCards')

let starRating = document.getElementById('rating')
let stars = starRating.getElementsByTagName('span')


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

        ,
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

})


