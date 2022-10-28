

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
        todoCategory: "Home"                                            //initial todos
    }, 
    {
        todoID: 2,
        todoText: "Wash Car",
        todoComplete: false,
        todoCategory: "Extra Work"
    }
]
async function getTodos() {
    let response = await fetch('/todos')
    let data = await response.json()

    return data 
}




let listContainer = document.getElementById("todoList");
let addBtn = document.querySelector('#addBtn')
let todoInput = document.querySelector('#inputText')




//Displays Todos
function displayTodos(todos) {
    listContainer.innerHTML = ""

    todos.forEach(todo => {
        let done = todo.todoComplete ? "done" : "";
        let todoMarkup = `<div id="C${todo.todoID}><span id="categoryTitle">${todo.todoCategory}</span> <li id = 'T${todo.todoID}'>${todo.todoText}</li></div>`

        listContainer.insertAdjacentHTML('beforeend', todoMarkup)
    })
    findtoDoLeft()
}





//Lets User add ToDos
addBtn.addEventListener('click', event => {
    let todoText = todoInput.value
    addTodo(todoText)
    displayTodos(todos)
    findtoDoLeft()
})

function addTodo(todoText) {
        // fetch('/todos', {
        //     method: 'POST',
        //     body: JSON.stringify({todo: todoText, todoCategory: categoryHolder.value}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(data =>  {
        //     displayTodos(data)
        // })
        findtoDoLeft()
}






//displays categories
let categoryHolder = document.getElementById('category')
let categories = ["School","Home","Extra Work"]

function displayCategories() {
    
    categories.forEach(element => {

        let categoryOption = document.createElement('option')   //display categories as options from a drop down list
        categoryOption.textContent = element
    
        categoryHolder.appendChild(categoryOption)
    
    }
        
    )
   
}
displayCategories(categories)






//Lets user add new categories

    // fetch('/categories', {
    //     method: 'POST',
    //     body: JSON.stringify({todoCategory: categoryHolder.value}),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(res => res.json())
    // .then(data =>  {
    //     displayCategories(data)
    // })

let form = document.getElementById('categoryForm')
function addCategory() {
    form.classList.toggle('invisible')
}

let submitCategory = document.getElementById('submitCategory')      //new form pops up to add a category
let cname = document.getElementById('cname')


submitCategory.addEventListener('click', () => {
    let categoryText = cname.value
    form.classList.toggle('invisible')
    
    let categoryOption = document.createElement('option')
    categoryOption.textContent = categoryText
    categories.push(categoryOption.value)

    categoryHolder.appendChild(categoryOption)

})





//lets user edit categories for todos
let form2 = document.getElementById('editcategoryForm')


function editCategory() {
    let newCategoryList = []
    form2.innerHTML = ""
    categoryHolder.innerText = ""
                                                //initialize a new array and empty the holder to make sure it's empty
                                                //insert current categories into now visible list to be edited

    for (i=0;i<categories.length; i++) {
        let todoCategories = `<span id='${i}'>${categories[i]}</span>`
        form2.insertAdjacentHTML('beforeend', todoCategories)
    }

    form2.classList.toggle('invisible')


    // fetch('/categories', {
    //     method: 'DELETE',
    //     body: JSON.stringify({id: target.id),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(res => res.json())
    // .then(data =>  {
    //     displayCategories(data)
    // })

    form2.addEventListener('dblclick', function handleClick(event) { //on double click remove the category
        let target = event.target
        targetID = target.id
        
        target.remove()
        categories.splice(targetID, 1)
    })
    

    if(form2.contentEditable = "false") {
        form2.contentEditable = true;                       //checks if we can edit the items
        let button = document.createElement('button');
        button.innerText = "Save Changes";
        button.classList.add('saveButton')
        form2.appendChild(button);

        button.addEventListener('click', (event) => {
            form2.contentEditable = false;
            button.remove()
            
        })
}





let submitbutton = document.createElement('button')
submitbutton.innerText = 'Submit'                           
form2.appendChild(submitbutton);

submitbutton.addEventListener('click', () => {
form2.classList.toggle('invisible')
                                                                                    //on click we hide the edit form
                                                                                    //replace the categories array with the new array
for (let i=0; i<categories.length; i++) {
        let newCategoryq = document.getElementById(`${i}`).innerHTML
        categories.splice(i, 1, newCategoryq)
    
}


displayCategories(categories)

})


let formP = document.createElement('p')
formP.textContent = "Double Click on a Category to remove it"
  
form2.appendChild(formP)

}






//Lets user click clear done button and remove objects
function deleteCompleted() {
    const todos = document.getElementsByClassName("done"); //check if item contains class done and delete if it does
    while(todos.length > 0){
        todos[0].remove();
    }

    findtoDoLeft()

    // fetch('/todos', {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(todos.classList.contains("done"))
    // })
    // .then(res => res.json())
    // .then(data =>  {
    //     displayTodos(data)
    // })



    // for(let i=0; i<todos.length; i++) {
//     let doneItems = document.getElementsByTagName('li')
//     // if(li.classList.contains('done')) {
//     //     console.log(li)
//     // }
//     console.log(doneItems)
// }///Trying to get the done items so we can target those to remove them from the API
}







//shows total amount of todos left.
function findtoDoLeft(){
    let listContainer = document.getElementById("todoList").getElementsByTagName('li').length;

    numberLeft = document.getElementById('leftToDo')

    numberLeft.textContent = `You have ${listContainer} remaining items left to be completed`
}

findtoDoLeft()








//Lets the user complete and uncomplete tasks on double click
listContainer.addEventListener('dblclick', function handleClick(event) {
    let target = event.target
    
    if (event.target.classList.contains('done')) {
        target.classList.remove('done')
    }
    
    else {
        event.target.classList.add('done')
    }
})








//Lets User edit todo

function editList() {

    // fetch('/todos', {
    //     method: 'PUT',
    //     body: JSON.stringify({todo: todoText, id: todoID}),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(res => res.json())
    // .then(data =>  {
    //     displayTodos(data)
    // })


    if(listContainer.contentEditable = "false") {  //checks if the container is editable
        listContainer.contentEditable = true;
        let button = document.createElement('button');
        button.innerText = "Save Changes";
        button.classList.add('saveButton')
        listContainer.appendChild(button);

        button.addEventListener('click', (event) => { //adds ability to make list uneditable on click
            listContainer.contentEditable = false;
            button.remove()
        })
}}


getTodos().then( todos => {
    displayTodos(todos)
})

