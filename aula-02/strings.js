//metodos comuns de strings

const email = 'laracroft@rg.com.br'

// INDEXOF - Vai procurar o argumento informado e retorna a posição da primeira ocorrencia
// LASTINDEXOF - Vai procurar o argumento informado e retorna a posição da ultima ocorrencia
const lastIndexOfA = email.lastIndexOf('@')
console.log(lastIndexOfA)

// SLICE - fatia uma string - 1º argumento é a partir de qual posição e o 2º é até a posição
const emailSlice = email.slice(0,lastIndexOfA)
console.log(emailSlice)


//REPLACE - substitui um caracter (1 argumento) por outro (2 argumento)
const emailReplace = email.replace('laracroft', 'therock')
console.log(emailReplace)

// TEMPLATE STRINGS
const postMessage = 'É biscoito ou bolacha?'
const author = 'Fulano'
const postComments = 15
const html = `
    <h2>${postMessage}</h2>
    <p>${author}</p>
    <span>Este post tem ${postComments} comentários.</span>
`

document.querySelector('div.teste').innerHTML = html