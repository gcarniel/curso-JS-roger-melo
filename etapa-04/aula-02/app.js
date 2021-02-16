/* VARIÁVEIS E ESCOPO DE BLOCO
    TIPOS DE DECLARAÇÕES:
        - VAR   >> Forma antiga, ela não respeita escopo de bloco, em escopo de função ela fica 'presa', por isso é perigoso usá-la.
        - LET   >> Forma nova, respeita escopo de bloco e função. Pode ser lida e reescrita (mutável).
        - CONST >> Cria-se uma constante, respeita escopo de bloco e função. Pode ser lida apenas (imutável).

    Escopo de bloco - Se uma LET ou CONST forem criada na raiz do documento os blocos terão acesso a ela,
        mas se forem criadas dentro de algum bloco a raiz não terá acesso, porém se houver blocos "filhos"
        do bloco de criação eles terão acesso.

        Veja que há uma hierarquia. Como se fosse uma grandeza do maior ao menor, sendo a raiz o maior.

        Variáveis criadas na raiz os blocos acessam, variáveis criadas em blocos apenas eles e blocos internos 
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
    // console.log(`Ex_2 - Sou um log na raiz e apresento erro, pois age2 (${age2}),foi criada dentro de um bloco e NÃO TENHO ACESSO.`)

    
/* USO DO THIS 
    THIS é um objeto de contexto e seu valor muda de acordo com o local onde ele está (raiz ou bloco)
    Em um OBJETO
        o THIS vai fazer referência ao objeto, se dentro de um objeto ou dentro de uma function declaration que está no objeto.
        observação - Se dentro do objeto tiver uma arrow function e usar o this nesta arrow function ele fará referência à raiz, 
            mas se for uma function declarion o this fará referência ao objeto.
    
    na RAIZ
        Aqui o THIS fará referência ao objeto window do navegador. Assim como se eu tiver um objeto e dentro desse objeto tiver
            uma arrow function o THIS fará referência ao window também.
    
    shortcurt para funções dentro do obejto
        
        Function declaration podem ser declaradas de duas formas dentro de um objeto:
        1 - login: function () {console.log('logado')}
        2 - login () {console.log('logado')} 
            o 2 é um shortcurt, com ele não precisamos colocar os dois ponto ':' nem a palavra reservada function.
*/

    const user = {
        name: 'gabriel',
        age: 30,
        email: 'gabriel@gabriel.com.br',
        city: 'PP',
        blogPosts: ['post 1', 'post 2', 'post 3'],
        login () {console.log('Usuário logado')},
        logout () {console.log('Usuário deslogado')},
        logBlogPosts () {
            console.log(`${this.name} escreveu ${this.blogPosts.length} posts:`)
            this.blogPosts.forEach(post => console.log(post))
        } 
    }

    user.logBlogPosts()
    user.login()