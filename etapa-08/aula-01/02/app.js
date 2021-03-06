/* MAP
    -Gera um novo array com a mesma quantidade de elementos do array original, mas transformado de acordo com a função que passarmos
    -Recebe uma função como argumento, nessa função pode ter até 3 argumentos, item atual iterado, index atual iterado e o array que passamos.
    Quando usar?
    R: Quando precisar retornar um novo array com a mesma quantidade de itens, mas com os itens transformados.
    
    const numbers =[1,2,3]
    const doubleNumbers = numbers.map(item => item * 2)
    console.log('Array retornado do MAP: ',doubleNumbers)
    console.log('Array original', numbers)
    
    const prices = [20,10,30,25,15,40,80,5]
    const salesPrices = prices.map(price => price / 2)
    console.log(salesPrices)
*/
const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const salesProducts = products.map( product => {
    if(product.price >= 30){
        return {name: product.name, price: product.price / 2}
    }
    return product
})

console.log(salesProducts, products)
