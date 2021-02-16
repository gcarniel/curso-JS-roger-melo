/*
O QUE É ESCOPO?
    Pode ser definido como a visibilidade de uma variável.
    
TIPOS DE ESCOPO
    -Função >> VAR, LET e CONST ficam "presas" na função, ou seja, a raiz não tem acesso, 
        mas as funções de dentro terão acesso.
    
    -Bloco >> LET e CONST ficam "presas" na função, ou seja, a raiz não tem acesso, 
        mas as funções de dentro terão acesso. Já VAR dentro de um bloco é "vazado", então a raiz tem acesso.

    -Léxico >> Funções aninhadas quando não tem variáveis declaradas em seu escopo vão buscar as declarações em escopos acima.
        Mas é sempre de dentro pra fora.
*/

/*EXEMPLOS */
    // FUNÇÕES
        function example() {
            var a1 = 1
            let b1 = 2
            const c1 = 3
            console.log(a1,b1,c1)
        }
        example()
        //esse console abaixo da erro pq a, b e c não são visiveis na raiz, estão no escopo da função.
        // console.log(a1,b1,c1)  

    // BLOCO
        if (true) {
            var a2 = 11
            let b2 = 12
            const c2 = 13
            console.log(a2,b2,c2)
        }
        // a2 será visível fora, b2 e c2 não pq ficam presas no bloco.
        console.log(a2)

    // LÉXICO
        const external = () => {
            const book = 'sapiens'
            const movie = 'algum filme'
            const internal = () => {
                const movie = 'outro filme'
                console.log(book) //como não tem book em seu escopo ela buscou no de fora.
                console.log(movie) //como movie tem em seu escopo usou ele, o mais próximo.
            }
            internal()
        }
        external()
