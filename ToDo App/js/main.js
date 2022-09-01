
//Starting ToDo List
let todoArr = [
    {
        id: 1,
        name: 'Dishes',
        status: false,
        category: "Important",
        due: "Friday"
    },

    {
        id: 1,
        name: 'Dishes',
        status: false,
        category: "Important",
        due: "Friday"
    }
]


//Should Print the ToDo in the array //Can't figure out how to not override the displayed text and instead need to add text
for(let i = 0; i < todoArr.length; i++) {
    listArea = document.getElementById("todoList")
    listArea.innerHTML = Object.values(todoArr[i])
}

//Hopefully creates new todo based on user input
const formButton = document.getElementById("submitButton");
formButton.addEventListener(onclick, NewtoDo)

function NewtoDo() {

}





//.map() .find()  .findIndexOf()

