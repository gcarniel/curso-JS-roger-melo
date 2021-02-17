/*EXPRESSÕES REGULARES (REGEX)
    usados para dar 'match' em determinada string.
    começa e termina com barra (/)
    ^palavraOuLetraProcurada$ - dessa forma só da match se existir a palavra sozinha.
    {6,10}quantificador de quantas palavras queremos dar match, no exemplo queremos match de 6 a 10 caracteres.
    . ponto representa qualquer caracter.
*/


const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    // console.log(usernameInput.value)
    console.log(form.username.value)

})