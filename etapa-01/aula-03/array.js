// ARRAYS
    let heroes = ['Batman', 'Catwoman', 'Iron Man']
    let ages = [10, 15, 23, 11, 31]

    
    for (let i in heroes){
        console.log(heroes[i])
    }
    
// METODOS DE ARRAY

    // LENGTH
    console.log('indices: ', heroes.length)

    // JOIN - Junta os arrays, podendo passar como argumento algum caracter para separar os dados
    console.log('join:', heroes.join(' - '))

    // INDEXOF - Retorna o indice do dado passado como parametro, caso não haja retornará -1
    console.log('indexOf: ', heroes.indexOf('Superman'))
    
    //CONCAT - Concatena um array a outro ou vários e não altera o array original
    console.log('concat: ', heroes.concat(['Captain America', 'Thor']))
    
    // PUSH - Adiciona um elemento ao final do array - é mutável, ou seja, altera o array
    heroes.push('Spider Man', 'Hulk')
    console.log('push: ', heroes)

    // POP - Remove o ultimo elemento do array - é mutável
    heroes.pop()
    console.log('pop: ', heroes)