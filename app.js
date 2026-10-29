

let addBtn = document.querySelector("#addTask")
let task = document.querySelector("#task")
let userTasks = document.querySelector("#tasks")


addBtn.addEventListener("click", (event) => {
    let todo = task.value
    console.log(task.value)
    if (task.value === ""

    ) {
        alert("write something")
    }
    else {
        if (addBtn.innerHTML == "Add") {
            console.log(task.value.length)
            userTasks.innerHTML += `<div class="flex">
    <li>${todo}</li> <div> <button  onclick="edit(event)" id="editBtn" >Edit</button>
    <button onclick = "dlt(event)">Delete</button>
    </div></div>`
            task.value = ""

        }
        else {
        let editBtn =     document.querySelector("#editBtn")
          edit(editBtn)

        }

    }

})

const edit = (event) => {
    let previousTodo = event.target.parentNode.parentNode.children[0].innerHTML
    task.value = previousTodo
    addBtn.innerHTML = "Save"

}


const dlt = (event) => {
    event.target.parentNode.parentNode.remove()
}