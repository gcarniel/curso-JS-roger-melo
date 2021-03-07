/* Encadeamento de métodos
    Só é possível fazer encadeamento quando o método anterior retorna uma estrutura na qual o próximo método
    funciona.
*/

const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
  ]

const filteredBooks = books
    .filter(({ price }) => price > 20)
    .map(({ name, price }) => `O preço do livro "${name}" caiu para ${price} reais`)

console.log(filteredBooks)