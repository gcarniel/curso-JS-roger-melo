// 03-02
    // ! (NOT) - usamos para negar uma condição, com ela invertemos o valor de uma variável.


    console.log('Eu era true e agora sou ',!true)
    console.log('Eu era false e agora sou ',!false)

    let isUserLoggedIn = false

    if (!isUserLoggedIn) {
        console.log('Login realizado!')
    }

    // negar uma condição seria como comparar ela, como abaixo.
    if (isUserLoggedIn !== true) {
        console.log('Login realizado!')
    }

// 03-03
    // BREAK e CONTINUE - usamos eles dentro de loops.
    //  break serve para darmos uma parada e sair do loop, finaliza o loop.
    //  continue serve para sairmos do ponto atual e ir ao ponto de inicio do loop, então incrementa o loop.

    const scores = [50, 25, 0, 30 , 100, 20, 10]

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === 0) {
            console.log('passei no CONTINUE')
            continue //vou sair daqui e continuar o loop
        }

        console.log(`Pontuação: ${scores[i]}`)

        if (scores[i] === 100) {
            console.log('passei no BREAK')
            break //atingi a pontuação maxima, então dou o break e o loop será finalizado
        }
    }

// 03-04
    // SWITCH - Usamos para verificar um valor e entao fazer o case (CASO ISSO FAÇA O BLOCO)
    // é parecido com IF, mas com if teríamos muitos IFs aninhados.

    const grade = 'B'

    switch (grade) {
        case 'A':
            console.log('Você tirou um : ', grade)
            break
        case 'B':
            console.log('Você tirou um : ', grade)
            break
        case 'C':
            console.log('Você tirou um : ', grade)
            break
        case 'D':
            console.log('Você tirou um : ', grade)
            break
        case 'E':
            console.log('Você tirou um : ', grade)
            break
        default:
            console.log('nota inválida!')
    }