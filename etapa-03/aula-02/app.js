// ARROW FUNCTION

    // função tradicional
    const double = function(number) {
        return number * 2
    }

    // função arrow (flecha)
        // 1 parâmetro apenas - podemos ignorar os parênteses do parâmetro, mas não podemos usar o default no parâmetro, nesse caso específico.
        const example1 = number => {
            return number * 2
        }

        // Nenhum parâmetro - Se a arrow function não tiver parâmetros é obrigatório o uso de parênteses. 
        // assim como é obrigatório também quando houver 2 ou mais parâmetros.
        const example2 = () => 'Example 02'
        
        // Return implicito - é possível retirar a palavra return e as chaves quando a expressão for de apenas uma linha.
        // a função example 3 faz o mesmo que example1, mas se o codigo passar de uma linha então deve incluir as chaves e o return.
        const example3 = number => number * 2
        
        console.log(example1(2))
        console.log(example2())
        console.log(example3(2))

    // FUNÇÕES
        // Funções são invocadas pelo seu nome e parênteses ().
        const sayHi = () => 'Oi, fui invocado!'
        const invocandoFuncao = sayHi()
        console.log(invocandoFuncao)

    // MÉTODOS
        // é uma função, o que muda é sua declaração e invocação.
        // são invocados com a notação ponto '.' + seu nome e parênteses ().
        const myName = 'Gabriel'
        const myNameInUpperCase = myName.toUpperCase() //invocando o método para transformar myName em maiúscula.
        console.log(myNameInUpperCase)

    // CALLBACKS - Assim como passamos argumentos para funções podemos passar também uma função e isso se chama callback.
        // Passo a passo de como funciona a execução após declararmos a função e fazer a invocação.
        console.log('\n--------------------------------')

        // Passo 2 - myFunc será executada e então vai invocar 'callback()'
            const myFunc = callback => {
                console.log('1 - Iniciando myFunc.')
                callback('3 - Fui passado como argumento para a callback.') //Aqui será feito a invocação da callback  'argumentoCallback' e passando o texto como argumento
                console.log('5 - Finalizando myFunc.')
            }

        // Passo 3 - arrow passada como argumento é executada, após termino de sua execução o sistema volta para myFunc para terminar de processar.
            const argumentoCallback = n => {
                console.log('2 - Iniciando a callback.')
                console.log(n) 
                console.log('4 - Finalizando Callback.')
            }

        // Passo 1 - chamamos a função myFunc passando como argumento 'argumentoCallback' que contém uma arrow function.
            myFunc(argumentoCallback)

        // Passo 4 - myFunc terminou e o sistema segue a ordem de execução de código (de cima para baixo).
            console.log('6 - FIM')
        
        console.log('--------------------------------')

        // FOREACH (para cada) - é o loop igual ao for, porém não precisamos implementá-lo. Ele vai percorrer o array abaixo para cada item contido.
            // antes tínhamos que controlar tudo, como let i = 0, pegar tamanho do array e incrementar o i (i++). FOREACH faz tudo isso para nós.
            const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

            socialNetworks.forEach((item, i) => {console.log(`${i} - ${item}`)})
            
        // Utilizando callback e interagindo com a página
            const ul = document.querySelector('[data-js="ul"]')
            let HTMLTemplate = ''

            socialNetworks.forEach(item => {
                HTMLTemplate += `<li style="color: blue;">${item}</li>`
            })

            ul.innerHTML = HTMLTemplate

