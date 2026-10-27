

let addBtn = document.querySelector("#addTask")
let task = document.querySelector("#task")
let userTasks = document.querySelector("#tasks")


addBtn.addEventListener("click", () => {
    let todo = task.value

    if (task.value === ""

    ) {
        alert("write something")
    }
    else {
        userTasks.innerHTML += `<div class="flex">
    <li>${todo}</li> <div> <button>Edit</button>
    <button>Delete</button>
    </div></div>`
        task.value = " "

    }

})