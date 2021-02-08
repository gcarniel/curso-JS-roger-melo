// FOR LOOP E WHILE

const names = ['Linus', 'Adam', 'Abel', 'Bill']

console.log('Usando for com i++')
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log('Usando for in')
for (let i in names) {
    console.log(names[i])
}

let i = 0
console.log('Usando while')
while (i < names.length) {
    console.log(names[i])
    i++
}

// IF (SE)-- ELSE (SENAO)

const password = 'abbce'

if (password.length >= 12 && password.includes('1')) {
    console.log('senha muito forte!')
}else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('senha forte!')
}else {
    console.log('Sua senha deve ter 8 ou mais caracteres!')
}