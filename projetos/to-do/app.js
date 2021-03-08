const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const toDosContainer = document.querySelector('.todos-container')

const removeTodo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if(trashDataValue){
        todo.remove()
    }
}

const addTodo = inputValue => {
    if(inputValue.length){
        toDosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>
        `
        event.target.reset()
    }
}

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    })
}

const hideTodos = (todos, inputValue) => {
    const todosToHide = filterTodos(todos, inputValue, false)
    manipulateClasses(todosToHide, 'hidden', 'd-flex')
}

const showTodos = (todos, inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todosToShow, 'd-flex', 'hidden')
        
}

const clickRemoveTodo = event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
}

const submitNewTodo = event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    addTodo(inputValue)
}

const inputSearchTodos = event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = Array.from(toDosContainer.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
}

toDosContainer.addEventListener('click', clickRemoveTodo)

formAddTodo.addEventListener('submit', submitNewTodo)

inputSearchTodo.addEventListener('input', inputSearchTodos)

