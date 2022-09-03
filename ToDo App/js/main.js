
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


var img = document.createElement('img')
img.id = "img"

//Adds object to the array based on user input //Working on adding an image png when object is created to help delete items on click
function getValue() {
    img.src = 'images/trash.png'
    

    var nameVal = document.getElementById("name").value;
    var categoryVal = document.getElementById("category").value;
    var dueVal = document.getElementById("due").value;
    var statusVal = false;

    let newObj = {}
    newObj.name = nameVal
    newObj.status = statusVal
    newObj.category = categoryVal
    newObj.due = dueVal
    newObj.icon = img

    todoArr.push(newObj)

    var listItem = document.createElement('div')
    listItem.innerText = Object.values(newObj)
    listContainer.appendChild(listItem)


}

//Lets User delete a todo //Still working on this
function deletetoDo() {
    var element = document.getElementById("img");
    element.remove();
}



//Prints the initial Objects to the Array //May not need this entire code snipped moving on
listContainer = document.getElementById("todoList")

for(let i = 0; i < todoArr.length; i++) {
    var listItem = document.createElement('div')
    listItem.innerText = Object.values(todoArr[i])
    listContainer.appendChild(listItem)
}




//.map() .find()  .findIndexOf()



