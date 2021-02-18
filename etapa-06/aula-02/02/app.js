
const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
    event.preventDefault()

    const username = event.target.username.value
    const usernameRegex = /^[a-zA-Z]{6,12}$/
    const isAValidUsername = usernameRegex.test(username)
    
    if(isAValidUsername){
        feedback.textContent = 'Username válido!'
        return
    }
    feedback.textContent= 'Username inválido! Deve conter apenas letras e de 6 a 12 caracteres.'
})
