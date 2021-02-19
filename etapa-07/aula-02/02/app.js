const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B','B','B','B']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })

    setTimeout(() => {
        scrollTo(550,0)
    }, 1000);

    finalResult.querySelector('span').textContent = `${score}%`
    finalResult.classList.remove('d-none')
})


/* setTimeout
        - executa uma função após uma quantidade de tempo que especificarmos. Tem dois parâmetros, sendo eles:
        1: a função que desejamos executar.
        2: o tempo (milesegundos) para que a função seja executada.
        
        setTimeout(() => alert('oi'), 2000)

    scrollTo 
        - Navega por determinado ponto da tela e tem dois parâmetros.
        1: eixo X.
        2: eixo Y.
*/



