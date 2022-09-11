//Lets User add ToDos
function addToDo() {
    var inputVal = document.getElementById("inputText").value;
    var listContainer = document.getElementById("todoList");

    let newToDo = document.createElement('li');

    newToDo.textContent = inputVal;
    newToDo.classList.add("editBtn")
    newToDo.classList.add("fa fa-edit")
    newToDo.classList.add("fa fa-trash")

    listContainer.appendChild(newToDo)
}


