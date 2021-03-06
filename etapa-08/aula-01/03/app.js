/* FILTER
    -Gera um novo array, mas a quantidade de elementos retornado vai depender da condição passada como argumento.
    -Recebe uma função como argumento, nessa função pode ter até 3 argumentos, item atual iterado, index atual iterado e o array que passamos.
    -A condição da função passada sempre deve retornar um boolean.
      
    Quando usar?
    R: Quando precisar retornar um novo array mas filtrando seus itens, retornando apenas
       aqueles em que a condição seja verdadeira.
    
    const randomNumbers = [36, 99, 37, 63]
    
    const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)
    console.log('Array gerado com FILTER:',numbersGreaterThan37)
    console.log('Array original:',randomNumbers)
*/

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const usersPremium = users.filter(user => user.premium)
console.log(usersPremium)