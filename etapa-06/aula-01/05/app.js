/*EXPRESSÕES REGULARES (REGEX)
    usados para dar 'match' em determinada string.
    começa e termina com barra (/)
    ^palavraOuLetraProcurada$ - dessa forma só da match se existir a palavra sozinha.
    {6,10}quantificador de quantas palavras queremos dar match, no exemplo queremos match de 6 a 10 caracteres.
    . ponto representa qualquer caracter.
*/


const form = document.querySelector('.signup-form')

form.addEventListener('submit', event => {
    event.preventDefault()

    // console.log(usernameInput.value)
    console.log(form.username.value)

})

const username = 'gabriel'
const pattern = /^[a-z]{6,}$/ //A a Z em minúsculo e com 6 mínimo de 6 caracteres e inicio e final da string
// const isMatch = pattern.test(username)
// console.log(isMatch)

// if(isMatch){
//     console.log('teste da regex passou :)')
// }else {
//     console.log('teste da regex NÃO passou :(')
// }

const result = username.search(pattern) //se achar retorna o inicio da string, senão retorna -1
console.log(result)