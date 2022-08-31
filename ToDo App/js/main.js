let toDoApp = {
    name: 'dishes',
    status: false,
    id: 3,
    category: "Important",
    due: "Friday"
}


const myArr = Object.values(toDoApp);
document.getElementById("todoList").innerHTML = myArr;

//in class object making

let albums = [
    {
        id: 9,
        artistName: "Green Day",
        recordLabelID: 2
    },

    {
        id: 10,
        artistName: 'Eminem',
        recordLabelID: 7
    }
]

let recordLabel = [
    {
        id: 1,
        name: 'RCA'
    }
]

function editAlbum() {

}


//.map() .find()  .findIndexOf()