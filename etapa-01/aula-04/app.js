const nome = 'gabriel'

console.log(nome == 'Gabriel')
console.log(nome == 'gabriel')
console.log(nome === 'gabriel')
console.log(nome === 'Gabriel')

console.log('z' > 'b')
console.log('a > A: ', 'a' > 'A') //letras minusculas sempre sao 'maiores' que as maiusculas

console.log('A > a: ', 'A' > 'a') //letras maiusculas sempre sao 'menores' que as minusculas


// == - ao comparar (==) o JS faz conversão de tipos, por isso 30 é igual a '30'
console.log("30 == '30': ", 30 == '30')

// === - comparação estrita, compara os valores e também os tipos, por isso 30 é diferente de '30'. NÃO faz conversão de tipos
console.log("30 === '30': ", 30 === '30')

// conversão de tipos

const forNumber = Number('banana') // quando não for possivel converter vai retornar NaN
const forString = String(11) 
const forBoolean = Boolean(11)

/*
    valores convertidos para boolean que serão falsos:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - Nan

    Qualquer outra conversão para boolean retornará TRUE
*/

console.log(`forNumber: ${forNumber} ${typeof forNumber}
forString: ${forString} ${typeof forString}
forBoolean: ${forBoolean} ${typeof forBoolean}`)

