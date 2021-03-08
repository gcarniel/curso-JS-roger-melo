const formAddTodo = document.querySelector('.form-add-todo')
const inputSearch = document.querySelector('.form-search input')
const toDosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    console.log(event.target)

    if(inputValue.length){
        toDosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `
        event.target.reset()
    }
})

toDosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    const containClassDelete = Array.from(clickedElement.classList).includes('delete')
    if(containClassDelete){
        clickedElement.parentElement.remove()
    }
})

