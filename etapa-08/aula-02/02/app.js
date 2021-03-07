/* SORT
    - A ordenação é feita por unicode, o que justifica os detalhes abaixo:
        * Por padrão sua ordenação é por string, então para ordernar um array de strings basta invocar o método. 
        * Já para números é necessário passar uma função especificando a ordem, pois por padrão ele irá ordernar com 
            base no primeiro número.
    - Ordena um array
    - Modifica o array original

    - Possui um argumento opcional que é uma função na qual você define como quer ordenar e essa função sempre 
        deve gerar um número para que o sort saiba como ordenar. A ordenação será feita da seguinte forma:
        * crescente [-1, 0, 1] 
        * decrescente [1, 0, -1] 
        
*/

// Ordenando Strings
const names = ['Christian', 'Alfredo', 'Edson']
const sortNames = names.sort()
console.log(sortNames)

// Ordenando Números
// const scores = [10, 50, 20, 5, 35, 70, 45]
const scores = [25, 5, 10]
const sortScores = scores.sort((a, b) => a - b)

console.log(sortScores)

// Ordenando Objetos
const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
]

const sortTheBigFamily = theBigFamily.sort((item1, item2) => {

    if(item1.score > item2.score){
        return -1
    }else if (item2.score > item1.score) {
        return 1
    }

    return 0
})
console.log(sortTheBigFamily)

