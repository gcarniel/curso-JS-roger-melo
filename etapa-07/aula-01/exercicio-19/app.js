/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. 
    Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
    https://github.com/gcarniel/curso-JS-roger-melo/tree/main/etapa-07/aula-01/exercicio-19
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
    *Para mim a maior dificuldade foi entender como mudar as cores do bootstrap, após ir fuçando e alterando eu entendi 
        como fazia para alterar, pelo menos, o background e textos.
    *Comecei a assitir as aulas da etapa 07 então vi a implementação do quiz, por isso não tive dificuldades para verificar 
        as respostas certas, senão fosse por isso acredito que essa seria a maior dificuldade.
    *Outra dificuldade que tenho, não foi caso desse exercício, mas é tanto o HTML e mais ainda CSS. Criar o básico eu sei, 
        maior dificuldade mesmo é organizar na página todas as tags com CSS. 

- Quais foram as suas menores dificuldades durante a execução desse exercício.
    *Obter elemento através do querySelector foi a menor dificuldade, pois já ficou bastante claro pra mim.
    *O forEach também é outro ponto que não tenho tido dificuldades.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const correctAnswers = ['C', 'C', 'C', 'B']

const form = document.querySelector('form')
const p = document.querySelector('.result')

form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            console.log(form.inputQuestion1)
            score += 25
        }
    })
    p.textContent = `Você fez ${score}/100 pontos.`
})

