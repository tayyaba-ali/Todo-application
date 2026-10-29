

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
    <li>${todo}</li> <div> <button  onclick="edit(event)" >Edit</button>
    <button onclick = "dlt(event)">Delete</button>
    </div></div>`
            task.value = ""

        }
        else {


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
    <li>${todo}</li> <div> <button  onclick="edit(event)" >Edit</button>
    <button onclick = "dlt(event)">Delete</button>
    </div></div>`
                        task.value = ""

                    }
                    else {
                        console.log(todo)
                        console.log("yahan hain hm")

                    }

                }

            })


        }

    }

})

const edit = (event) => {
    let previousTodo = event.target.parentNode.parentNode.children[0]

    console.log(previousTodo)
    addBtn.innerHTML = "Save"
    task.value = previousTodo.innerHTML


}


const dlt = (event) => {
    event.target.parentNode.parentNode.remove()
}