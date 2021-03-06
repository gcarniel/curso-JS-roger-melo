/* REDUCE
    -Recebe dois argumentos:
      -uma função (obrigatório), nessa função pode ter até 4 argumentos, acumulador, item atual iterado, index atual iterado e o array que passamos.
      -valor inicial (opcional)

    Quando usar?
    R: Quando precisar reduzir o array original a algum outro tipo de dado.
    
    const numbers = [1, 2, 3]
    const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)
    console.log(sumResult)
*/

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]


const rogerScore = phaseScores.reduce((accumalator, phaseScore) => {
  if(phaseScore.name === 'Roger Melo'){
    accumalator += phaseScore.score
  }
  return accumalator
}, 0)

console.log(rogerScore)