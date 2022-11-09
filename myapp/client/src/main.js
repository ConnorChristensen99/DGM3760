

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

let categories = [];
 
 
 
async function getTodos() {
    let response = await fetch('/todos')
    let data = await response.json()

    return data; 
}

async function getCategories() {
    let response = await fetch('/categories')
    let data = await response.json()

    return data;
}




let listContainer = document.getElementById("todoList")
let addBtn = document.querySelector('#addBtn')
let todoInput = document.querySelector('#inputText')
// let editBtn = document.querySelectorAll('#editTodo')



//Displays Todos
function displayTodos(todos) {
    listContainer.innerHTML = ""

    todos.forEach(todo => {
        let done = todo.todoComplete ? "done" : "";
        let todoMarkup = `<div id="${todo.todoID}"><span id="categoryTitle">${todo.todoCategory}</span><li id = ${todo.todoID}>${todo.todoText} </li></div>` 
        // <a id="editTodo" href="#">Edit</a>

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
        fetch('/todos', {
            method: 'POST',
            body: JSON.stringify({todo: todoText, todoCategory: categoryHolder.value}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>  {
            displayTodos(data)
        })
        findtoDoLeft()
}






//displays categories
let categoryHolder = document.getElementById('category')

function displayCategories(categories) {

    categories.forEach(category => {
        let categoryOption = document.createElement('option')   //display categories as options from a drop down list

        categoryOption.innerText = category
        console.log(categoryOption)

        categoryHolder.appendChild(categoryOption) 

        
    })
        
} 







//Lets user add new categories
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

    categoryHolder.innerHTML = ""

    fetch('/categories', {
        method: 'POST',
        body: JSON.stringify({category: categoryText}),
        headers: {
            'Content-Type': 'application/json'                      ////////shows the new categories populate on the /categories, but does not send the data back that is being held////////
        }    
    })
    .then(res => res.json())
    .then(data =>  {
        displayCategories(categories)
    })

    
})





//lets user edit categories for todos
let form2 = document.getElementById('editcategoryForm')


function editCategory() {
    let newCategoryList = []
    form2.innerHTML = ""
                                                //initialize a new array and empty the holder to make sure it's empty
                                                //insert current categories into now visible list to be edited
    getCategories().then(categories => {
        categories.forEach(category => {
            let categoryOption = document.createElement('li')   //display categories as options from a drop down list
    
            categoryOption.innerText = category
    
    
            form2.appendChild(categoryOption) 
    
            
        })
    })
    .then()
    form2.classList.toggle('invisible')

    form2.addEventListener('dblclick', function handleClick(event) { //on double click remove the category   
        let target = event.target
        targetID = target.id
        target.remove()
        console.log(targetID)

        categoryHolder.innerHTML = ""
       
        fetch('/categories', {
            method: 'DELETE',
            body: JSON.stringify({id: targetID}),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        .then(res => res.json())
        .then(data =>  {
            
            displayCategories(categories)
        })
    })
    

    getCategories().then( categories => {
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
    
    })
    
   



getCategories().then( categories => {
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

window.location.reload()


})})



getCategories().then( categories => {
    let formP = document.createElement('p')
formP.textContent = "Double Click on a Category to remove it"
  
form2.appendChild(formP)
})
}


 

 

//Lets user click clear done button and remove objects
function deleteCompleted() {
    const todos = document.getElementsByClassName("done"); //check if item contains class done and delete if it does
    for (let i=0; i < todos.length; i++) {
        let deletedArray =[]
        let tobeDeleted = todos.item(i)

        deletedArray.push(tobeDeleted)
        console.log(deletedArray)

        deletedArray.forEach(markedTodo => { 
            let badTodo = todos.id
    
            console.log(badTodo) 
    
            fetch('/todos', {
                method: 'DELETE',
                body: JSON.stringify({todoID: badTodo}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data =>  {
                
                displayTodos(data)
            })
    
            findtoDoLeft()
    })
    }
    
    
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

    if(listContainer.contentEditable = "false") {  //checks if the container is editable
        listContainer.contentEditable = true;
        let button = document.createElement('button');
        button.innerText = "Save Changes";
        button.classList.add('saveButton')
        listContainer.appendChild(button);
        listContainer.focus()



        button.addEventListener('click', (event) => { //adds ability to make list uneditable on click
            listContainer.contentEditable = false;
            button.remove()

            // for (let i=0; i < todos.length; i++) {
                
            //     todos[i].todoText = listContainer.getElementsByTagName('li').item(i).innerText           ///////THIS SHOULD DO WHAT YOU WANT IT TO

                
            // }
                
                findtoDoLeft()

                
            

            

//     //     fetch('/todos', {
//     //     method: 'PUT',
//     //     body: JSON.stringify({todo: todoText, id: todoID}),
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // })

//     // .then(res => res.json())
//     // .then(data =>  {
//     //     displayTodos(data)
//     // })

        })
}
}







getTodos().then( todos => {
    displayTodos(todos)
})

getCategories().then( categories => {
    displayCategories(categories)
})

