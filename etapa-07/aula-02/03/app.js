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

    scrollTo(0,0) // subindo pro topo da página

    finalResult.classList.remove('d-none')
    
    let counter = 0
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)
})


/*  setTimeout
        - executa uma função após uma quantidade de tempo que especificarmos. Tem dois parâmetros, sendo eles:
        1: a função que desejamos executar.
        2: o tempo (milesegundos) para que a função seja executada.
        
        setTimeout(() => alert('oi'), 2000)

    setInterval
        - executa uma função após uma quantidade de tempo que especificarmos para ficar repetindo. Tem dois parâmetros, sendo eles:
        1: a função que desejamos executar.
        2: o tempo (milesegundos) para que a função seja executada.
        
            neste exemplo será exibido um alert a cada 2 segundos
            setInterval(() => alert('oi'), 2000)
    
    clearInterval 
        - interrompe a execução do setInterval, mas para isso precisa receber o ID do setInterval, precisamos
          atribuir o nosso setInterval a uma constante e invocar o clearInterval passando como argumento a const 
          que contém o setInterval.

            let counter = 0

            const timer = setInterval(() => {
                console.log('1 segundo passou...')
                counter++

                if (counter === 5) {
                    clearInterval(timer)        
                }
            }, 1000);

    scrollTo 
        - Navega por determinado ponto da tela e tem dois parâmetros.
        1: eixo X.
        2: eixo Y.
*/

