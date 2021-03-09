/* Data e hora
    Em JS data são um tipo de objetos, ou seja, são tipos de referência e não primitivos.

*/

const past = new Date('Mar 1 2021 7:47:00')
const present = new Date()

const difference =  present.getTime() - past.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(minutes / 24)
console.log({ days })

const timestamp = difference
console.log(new Date(timestamp))
