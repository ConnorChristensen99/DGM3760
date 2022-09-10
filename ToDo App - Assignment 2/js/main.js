import "./styles.css";

//Starting ToDo List //Place Holder to do items while I build.
var todoArr = [
    {
        id: 1,
        name: 'Dishes',
        status: false,
        category: "Important",
        due: "Friday",
    },

    {
        id: 1,
        name: 'Trash',
        status: false,
        category: "Important",
        due: "Friday",
    }
]




//Adds object to the array based on user input //Adds a delete button when a user adds a task but currently does not delete anything.
function getValue() {
    

    var nameVal = document.getElementById("name").value;
    var categoryVal = document.getElementById("category").value;
    var dueVal = document.getElementById("due").value;
    var statusVal = false;

    var btn = document.createElement("button");
    btn.innerHTML = "Remove ToDo";
    btn.onclick = console.log("I work")


    let newObj = {}
    newObj.name = nameVal
    newObj.status = statusVal
    newObj.category = categoryVal
    newObj.due = dueVal

    todoArr.push(newObj)

    var listItem = document.createElement('div')
    listItem.innerText = Object.values(newObj)
    listContainer.appendChild(listItem)
    listContainer.appendChild(btn)


}

//Lets User delete a todo //Still working on this
function deletetoDo() {
}


//Just started this and needs to be finished
function editAway () {
    toEdit = document.getElementById("name");
    toEdit.attr('contenteditable','true');
}

//Prints the initial Objects to the Array //May not need this entire code snipped moving on
listContainer = document.getElementById("todoList")

for(let i = 0; i < todoArr.length; i++) {
    var listItem = document.createElement('div')
    listItem.innerText = Object.values(todoArr[i])
    listContainer.appendChild(listItem)
}




//.map() .find()  .findIndexOf()



