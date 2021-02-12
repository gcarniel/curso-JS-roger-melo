// OBJETOS - são o núcleo dentro de JS. Como os objetos do mundo real o objeto tem propriedades (características) e métodos (ações).
    // CRIANDO OBJETO LITERAL
        // objeto é composto de chave e valor e não deve ser confundido com JSON. Aqui a chave não tem aspas.
        // podemos declarar objeto como CONST, porém não poderemos alterar a sua estrutura (propriedades), apenas o valor de suas propriedades.
        const user = {
            name: 'gabriel',
            age: 30,
            email: 'gabriel@gabriel.com.br',
            city: 'PP',
            login: function() {console.log('Usuário logado')},
            logout: function() {console.log('Usuário deslogado')},
        }

        // Acessando valores do objeto
            // Podemos simplesmente dar um consolo.log() no objeto e tudo que ele tem será mostrado.
                console.log(user)
            // NOTAÇÃO PONTO . - é possível acessar uma propriedade específica do objeto, para isso usamos obejeto.chave
                console.log('Usando notação .', user.name)   
            // NOTAÇÃO COLCHETES [] - é possível acessar uma propriedade específica do objeto, para isso usamos obejeto['name'] (note que a chave deve ser uma string).
                console.log('Usando notação []', user['name'])   
            
        // Atribuindo valores ao objeto
            // NOTAÇÃO PONTO . - é possível passar um valor para o objeto, para isso usamos obejeto.chave
                user.name = 'Nome 2'
                console.log('Nome passado com a notação .', user.name)   
            // NOTAÇÃO COLCHETES [] - é possível passar um valor para o objeto, para isso usamos obejeto['name'] (note que a chave deve ser uma string).
                user['name'] = 'Nome 3'
                console.log('Nome passado com a notação []', user['name'])   

        // A notação com colchetes será útil quando quisermos atribuir o nome da chave a uma variável, desde que seja uma string. Isso não funciona na notação ponto.
            const nomePropriedade = 'name'
            user[nomePropriedade] = 'novo nome'
            console.log(user[nomePropriedade])
    
    // ADICIONANDO MÉTODOS AO OBJETO
        console.log('\n')
        // foi adicionado duas funções anônimas ao nosso objeto, cada uma delas tem sua chave e para acessarmos é da mesma forma que qualquer outra propriedade
        // do objeto, mas como se trata de método devemos invocá-los e para isso usamos os parênteses ()
        user.login()
        user['login']()

        user.logout()
        user['logout']()