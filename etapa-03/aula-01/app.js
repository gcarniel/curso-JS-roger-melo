// FUNÇÕES
    // HOISTING = IÇAMENTO. 
        // No içamento o JS consegue invocar a função antes de sua declaração.
        // Quando declaramos a função à variável é necessário declarar a função e depois atribuir à variável, pois se atribuir antes é como se
        // a função não existisse. Isso porque o código é lido de cima para baixo.

    // function declaration - Aqui acontece o hoisting.
        function sayHi() {
            console.log('E diga oi: oi')
        }

        sayHi() 

    // function expression - quando atribuímos uma função a uma variável. Nesse caso podemos usar a função como anônima. Aqui NÃO acontece o hoisting.
        const showFood = function(){
            console.log('pizza')
        }

        showFood()
        

    // ARGUMENTOS, PARAMETROS E DEFAULT PARAMETERS
        // ARGUMENTOS - é o que passamos para a função quando a invocamos (dentro dos parenteses).
        // PARAMETROS - é o que a função precisa receber (dentro dos parenteses) para cumprir seu objetivo.
        // DEFAULT PARAMETERS - Serve para quando não queremos passar um valor no argumento, quando isso acontecer vai pegar o default.
        // A ordem dos parametros deve ser respeitada quando passado os argumentos.

        function exemplo(parametros = 'Sou o default') {
            console.log(parametros)
        }

        exemplo('argumentos')

        function myName(name, lastName) {
            console.log(`Olá, ${name} ${lastName}`)
        }

        myName('Gabriel', 'Carniel')


    // RETORNANDO VALORES
        const double = function (number) {
            return number * 2
        }

        const showResult = function (value) {
            return `O resultado é: ${value}`
        }

        const result = double(2)
        console.log(showResult(result))
