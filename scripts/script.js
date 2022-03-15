const toDoContainer = document.querySelector('.to-do-container')
const addTaskButton = document.querySelector('.add-task')
const addTaskInput = document.querySelector('.to-do-input')
const clearButton = document.querySelector('.clear-list')
const completedList = document.querySelector('.completed-tasks')


let i = 0

class Todo {
    constructor(taskName) {
        this.taskName = taskName
    }
    createTask() {
        //create all elements and set attributes.
        const mainDiv = document.createElement('div')
        const p = document.createElement('p')
        const secondaryDiv = document.createElement('div')
        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('onclick', 'crossOutText(this.id)')
        const button = document.createElement('button')
        button.setAttribute('onclick', 'deleteTask(this.id)')
        const textNode = document.createTextNode(this.taskName)

        //set style classes
        mainDiv.classList.add('to-do')
        button.classList.add('delete-task')
        input.classList.add('checked')
        button.innerHTML = 'Delete'
        button.id = `button${i}`
        input.id = `checkbox${i}`
        mainDiv.id = `main-div${i}`

        //append elements to eachother
        toDoContainer.appendChild(mainDiv)
        mainDiv.appendChild(p)
        p.appendChild(textNode)
        mainDiv.appendChild(secondaryDiv)
        secondaryDiv.appendChild(input)
        secondaryDiv.appendChild(button)
    }
}

//add item to list
addTaskButton.addEventListener('click', (e) => {
    if (addTaskInput.value === '') {
        alert('Please enter task name')
    } else {
        const taskDescription = addTaskInput.value
        const newTask = new Todo(taskDescription)
        localStorage.setItem('task', taskDescription)
        newTask.createTask()
        addTaskInput.value = ''
        i++
    }
})

//Clear list
clearButton.addEventListener('click', () => {
    while(toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild)
    }
})

//delete a todo
const deleteTask = (id) => { 
    const deletedTask = document.getElementById(id)
    const firstParent = deletedTask.parentNode
    const headParent = firstParent.parentNode
    headParent.remove()
}

//cross out text or remove x and change location
const crossOutText = (id) => {
    const checkbox = document.getElementById(id)
    const firstParent = checkbox.parentNode
    const headParent = firstParent.parentNode
    const taskName = headParent.firstChild

    if (checkbox.checked) {
        taskName.style.textDecoration = 'line-through'
        completedList.append(headParent)
    } else {
        taskName.style.textDecoration = 'none'
        toDoContainer.append(headParent)
    }
}














