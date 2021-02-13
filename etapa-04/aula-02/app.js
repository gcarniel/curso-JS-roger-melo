// VARIÁVEIS E ESCOPO DE BLOCO
    /* TIPOS DE DECLARAÇÕES:
        - VAR   >> Forma antiga, ela não respeita escopo de bloco, por isso é perigoso usá-la.
        - LET   >> Forma nova, respeita escopo de bloco. Pode ser lida e reescrita (mutável).
        - CONST >> Cria-se uma constante, respeita escopo de bloco. Pode ser lida apenas (imutável).

    Escopo de bloco - Se uma LET ou CONST for criada na raiz do documento os blocos terão acesso a ela,
        mas se forem criadas dentro de algum bloco a raiz não terá acesso, porém se houver blocos "filhos"
        do bloco de criação eles terão acesso.

        Veja que há uma hierarquia. Como se fosse uma grandeza do maior ao menor, sendo a raiz o maior.

        Variáveis criadas da raiz os blocos acessam, variáveis criadas em blocos apenas eles e blocos internos 
        terão acesso. Se criar em uma variável dentro de um bloco que está dentro de outro bloco só o interno
        tem acesso à variável e assim segue.
    */

    // EXEMPLO 1
    const age = 33

    const funcaoExemplo = () => {
        console.log(`Ex_1 - Veja que tive acesso a age (${age}), pois ela foi criada na raiz.`)

        if (true) {
            console.log(`Ex_1 - Eu sou um bloco dentro de outro bloco (a função) e tive acesso a age (${age}), pois ela foi criada na raiz.`)
        }
    }

    funcaoExemplo()
    console.log(`Ex_1 - Sou um log na raiz, logo tenho acesso a age (${age}), pois ela foi criada na raiz.`)

    console.log('\n\n')
    // EXEMPLO 2
    const funcaoExemplo2 = () => {
        const age2 = 44
        console.log(`Ex_2 - Veja que tive acesso a age2 (${age2}), pois ela foi criada NO MEU BLOCO.`)

        if (true) {
            console.log(`Ex_2 - Eu sou um bloco dentro de outro bloco (a função) e tive acesso a age2 (${age2}), pois ela foi criada NO MEU BLOCO PAI.`)
            if(true){
                console.log(`Ex_2 - Eu sou um bloco dentro de outro bloco (o IF de fora) e tive acesso a age2 (${age2}), pois ela foi criada NO MEU BLOCO AVÔ.`)
            }
        }
    }
    funcaoExemplo2()
    console.log(`Ex_2 - Sou um log na raiz e apresento erro, pois age2 (${age2}),foi criada dentro de um bloco e NÃO TENHO ACESSO.`)

