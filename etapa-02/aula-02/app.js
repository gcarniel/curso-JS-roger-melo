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

