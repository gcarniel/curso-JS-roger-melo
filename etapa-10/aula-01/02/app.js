/* Data e hora
    Em JS data são um tipo de objetos, ou seja, são tipos de referência e não primitivos.

*/

const present = new Date()

console.log(present)
console.log('Pegando ano:', present.getFullYear())
console.log('Pegando mes:', present.getMonth()) // getMonth é base zero, começa do 0, então janeiro é 0
console.log('Pegando data:', present.getDate())
console.log('Pegando dia:', present.getDay()) // getDay é base zero, começa do 0, então domingo é 0

console.log('\n')

console.log('Pegando hora:', present.getHours())
console.log('Pegando minuto:', present.getMinutes())
console.log('Pegando segundos:', present.getSeconds())

console.log('\n')

console.log('timestamp:', present.getTime())

console.log('\n')

console.log('toDateString:', present.toDateString())
console.log('toTimeString:', present.toTimeString())
console.log('toLocaleString:', present.toLocaleString())
console.log('toLocaleDateString:', present.toLocaleDateString())