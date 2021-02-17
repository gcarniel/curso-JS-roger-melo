/*
    preventDefault() - ao fazer um submit faz com que a página não seja recarregada, pois por padrão ao fazer um submit
                       de um form a página recarrega.
*/


const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    // console.log(usernameInput.value)
    console.log(form.username.value)

})