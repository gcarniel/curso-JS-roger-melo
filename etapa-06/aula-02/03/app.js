
const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => {
    const usernameRegex = /^[a-zA-Z]{6,12}$/
    return usernameRegex.test(username)

}

form.addEventListener('submit', event => {
    event.preventDefault()

    const username = event.target.username.value
    const isAValidUsername = testUsername(username)

    if(isAValidUsername){
        feedback.textContent = 'Username válido!'
        return
    }
    feedback.textContent= 'Username inválido! Deve conter apenas letras e de 6 a 12 caracteres.'
})

form.username.addEventListener('keyup', event => {
    const username = event.target.value
    const isAValidUsername = testUsername(username)
    
    if(isAValidUsername){
        form.username.setAttribute('class', 'success')
        console.log('Válido')
        return
    }
    form.username.setAttribute('class', 'error')
    console.log('Inválido')
})

