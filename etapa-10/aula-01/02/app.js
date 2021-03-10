/* Data e hora
    Em JS data são um tipo de objetos, ou seja, são tipos de referência e não primitivos.

*/

const present = new Date()

console.log(present)
console.log('Pegando ano:', present.getFullYear()) // retorna ano com 4 dígitos
console.log('Pegando mes:', present.getMonth()) // getMonth é base zero, começa do 0, então janeiro é 0
console.log('Pegando dia do mes:', present.getDate()) // retorna o dia do mês e não uma data
console.log('Pegando dia da semana:', present.getDay()) // getDay é base zero, começa do 0, então domingo é 0

console.log('\n')

console.log('Pegando hora:', present.getHours()) // retorna hora
console.log('Pegando minuto:', present.getMinutes()) // retorna minutos
console.log('Pegando segundos:', present.getSeconds()) // retorna segundos

console.log('\n')

console.log('timestamp:', present.getTime()) // retorna o tempo em milisegundos, com ele podemos fazer cálculos com datas

console.log('\n')

console.log('toDateString:', present.toDateString())
console.log('toTimeString:', present.toTimeString())
console.log('toLocaleString:', present.toLocaleString())
console.log('toLocaleDateString:', present.toLocaleDateString())