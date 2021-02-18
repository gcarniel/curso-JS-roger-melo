/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/
  const form = document.querySelector('form')
  const paragraph = document.createElement('p')
  const input = document.querySelector('input')
  input.insertAdjacentElement('afterend', paragraph)

  const isAValidUsername = () => {
    const usernameIsValid = testUsername(form.username.value)

    if(usernameIsValid){
      paragraph.setAttribute('class', 'username-success-feedback')
      paragraph.textContent = 'Username válido =)'
      return
    }
    paragraph.setAttribute('class', 'username-help-feedback')
    paragraph.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'
  }

  const testUsername = username => {
    const usernameRegex = /[a-zA-Z]{6,}/
    return usernameRegex.test(username)
  }

  form.username.addEventListener('keyup', isAValidUsername)


/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

  const button = document.querySelector('button')
  const pFeedback = document.createElement('p')
  button.insertAdjacentElement('afterend', pFeedback)

  const feedbackSubmit = event => {
    event.preventDefault()
    const usernameIsValid = testUsername(event.target.username.value)

    if(usernameIsValid) {
      messageChange('Dados enviados =)')
      return
    }
    messageChange('Por favor, insira um username válido','help')
  }

  const messageChange = (message, type = 'success') => {
    const p = button.nextElementSibling
    p.textContent = message
    p.setAttribute('class', `submit-${type}-feedback`)
  }

  form.addEventListener('submit', feedbackSubmit)

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const mySome = (array, func) => {
  for(let i = 0; i < array.length; i++){
    // console.log(array[i])
    if(func(array[i])){
      return true
    }
  }
  return false
}

const array1 = [1, 2, 3]
const array2 = [1, 3, 5]


console.log(mySome(array1, a => a > 2))
console.log(mySome(array2, a => a === 0))
