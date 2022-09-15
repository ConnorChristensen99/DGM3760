
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


////////////////////////////////////////////////////////////////////////////////////////////////

//filter - assume you have an array 'wizards' filled with names and houses as objects inside
let gryfindors = wizards.filter(wizard => {
    return wizard.house ==="Gryfindor" //this will return true or false if they are Gryfindor as their house
})
gryfindors // Calling this gives the objects that are Gryfindors


//findIndex
let firstGryf = wizards.findIndex(wizard => wizard.house === "Gryfindor")//If you have the ID you can have this function find the ID and take it

firstGryf //this will return 0 as the first person in the list is Gryfindor. THIS STOPS AT FIRST FOUND ITEM

//changing array methods
let gryfindorWizardNames = wizards.filter(wizard => wizard.house ==="Gryfindor").map(wizard => wizard.name)//this creates a new array with all students who are Gryfindors

//look at makeTree - Advanced Functions Assignment //Recursive Functions will be needed
function makeTree(arr, parent) {
    let node = {}

    return {}
}


let myObj = {
    name: 'Connor'
}

myObj.name
myObj['name']//these both return the name - showing the two ways

myObj.eyeColor = 'blue'//This adds that property with that value to the object

let myNewProp = 'height'
myObj.myNewProp = 4//THIS DOESN'T WORK /THIS WILL RETURN myNewProp:4
myObj[myNewProp] = 5//THIS IS HOW YOU DO IT /THIS RESULTS IN Height:5