let listContainer = document.getElementById("todoList");

//Lets User add ToDos
function addToDo() {
    let inputVal = document.getElementById("inputText").value;


    let newToDo = document.createElement('li');
    //Tried adding code here to get the trash cans to pop up
    if(inputVal != "") {

    newToDo.innerText = inputVal

    listContainer.appendChild(newToDo)

    findtoDoLeft()
    }else {
        alert("Please enter a ToDo")
    }
}


//Lets user click clear done button and remove objects
function deleteCompleted() {
    const todos = document.getElementsByClassName("done");
    while(todos.length > 0){
        todos[0].parentNode.removeChild(todos[0]);
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


//Lets user delete todo separately 


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
