////YOU NEED TO GET THIS WORKING IN THE APP TO START ADDING CATEGORIES?

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
        todoCategory: "Home"
    },
    {
        todoID: 2,
        todoText: "Wash Car",
        todoComplete: false,
        todoCategory: "Extra Work"
    }
]

let listContainer = document.getElementById("todoList");
let addBtn = document.querySelector('#addBtn')
let todoInput = document.querySelector('#inputText')

//Displays Todos
function displayTodos(todos) {
    listContainer.innerHTML = ""

    todos.forEach(todo => {
        let done = todo.todoComplete ? "done" : "";
        let todoMarkup = `<div id="C${todo.todoID}><span id="categoryTitle">${todo.todoCategory}</span> <li data-todoID = '${todo.todoID}'>${todo.todoText}</li></div>`

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
    if(todoInput != ""){
    let newTodo = {
        todoID: todos.length + 1,
        todoText: todoText,
        todoComplete: false,
        todoCategory: categoryHolder.value
    }
    todos.push(newTodo)

    findtoDoLeft()
    }else {
        alert("Please enter a ToDo")
    }
}

//displays categories
let categoryHolder = document.getElementById('category')
let categories = ["School","Home","Extra Work"]

function displayCategories() {
    
    categories.forEach(element => {

        let categoryOption = document.createElement('option')
        categoryOption.textContent = element
    
        categoryHolder.appendChild(categoryOption)
    
    }
        
    )
   
}
displayCategories(categories)


//Lets user add new categories
let form = document.getElementById('categoryForm')
function addCategory() {
    form.classList.toggle('invisible')
}

let submitCategory = document.getElementById('submitCategory')
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


    for (i=0;i<categories.length; i++) {
        let todoCategories = `<span id='${i}'>${categories[i]}</span>`
        form2.insertAdjacentHTML('beforeend', todoCategories)
    }

    form2.classList.toggle('invisible')

    form2.addEventListener('dblclick', function handleClick(event) {
        let target = event.target
        targetID = target.id
        
        target.remove()
        categories.splice(targetID, 1)
    })
    

    if(form2.contentEditable = "false") {
        form2.contentEditable = true;
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

for (let i=0; i<categories.length; i++) {
        let newCategoryq = document.getElementById(`${i}`).innerHTML
        newCategoryList.push(newCategoryq)
    
}

categories.splice(0, categories.length, ...newCategoryList)
displayCategories(categories)

})


let formP = document.createElement('p')
formP.textContent = "Double Click on a Category to remove it"
  
form2.appendChild(formP)

}

//Lets user click clear done button and remove objects
function deleteCompleted() {
    const todos = document.getElementsByClassName("done");
    while(todos.length > 0){
        todos[0].remove();
    }

    findtoDoLeft()
}


//shows total amount of todos left. Added this function to call again in ever other function
function findtoDoLeft(){
    let listContainer = document.getElementById("todoList").getElementsByTagName('li').length;

    numberLeft = document.getElementById('leftToDo')

    numberLeft.textContent = `You have ${listContainer} remaining items left to be completed`
}

findtoDoLeft()



//Lets the user complete and uncomplete tasks
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
    if(listContainer.contentEditable = "false") {
        listContainer.contentEditable = true;
        let button = document.createElement('button');
        button.innerText = "Save Changes";
        button.classList.add('saveButton')
        listContainer.appendChild(button);

        button.addEventListener('click', (event) => {
            listContainer.contentEditable = false;
            button.remove()
        })
}}

displayTodos(todos)
