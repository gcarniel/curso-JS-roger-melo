const radius = 10
const pi = 3.14

console.log(radius, pi)

// OPERADORES ARITMETICOS
    const reminder = 5 % 2 //resto da operação
    console.log(reminder)

// ORDEM DE OPERAÇÃO
    // 1 Parênteses
    // 2 Enpoentes ou raízes
    // 3 Multiplicação ou Divisão
    // 4 Adição ou Subtração

    const area = pi * radius ** 2
    console.log('area:' , area)

    const crazyOperation = 5 * (10 - 3) ** 2
    console.log('crazyOperation: ', crazyOperation)

// OPERADORES DE INCREMENTO E DECREMENTOS
    let postLikes = 1
    postLikes ++
    console.log('postLikes: ', postLikes)
    
    postLikes += 10
    console.log('postLikes: ', postLikes)

    postLikes --
    console.log('postLikes: ', postLikes)

    postLikes /= 2
    console.log('postLikes: ', postLikes)

// CONCATENAÇÃO DE STRING E NUMBER
    // sempre vai retornar uma string
    const likesMessage = 'o post tem ' + postLikes + ' likes.'
    console.log(likesMessage)

