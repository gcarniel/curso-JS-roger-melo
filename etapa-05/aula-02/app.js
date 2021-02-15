/*INNERTEXT
    com ela podemos pegar (get) o texto de um elemento ou então passar (set) texto para um elemento.
*/

    // const paragraph = document.querySelector('p')
    // console.log(paragraph)
    // // paragraph.innerText += ' texto'


    // const paragraphs = document.querySelectorAll('p')
    // // paragraphs.forEach((p, index) => p.innerText += ` novo texto ${index + 1}`)


/*INNERHTML
    com ela podemos pegar (get) um elemento html ou até passar (set) um elemento.
*/

    // const div = document.querySelector('.content')
    // // console.log(div.innerHTML)
    // // div.innerHTML += `<h2>novo h2</h2>`

    // const people = ['Jonatan', 'Vinícius', 'Diego']

    // people.forEach(person => {
    //     div.innerHTML += `<p>${person}</p>`
    // })

/*Obtendo e passando atributos
    *setAttribute
        - Seta um atributo para um elemento, contém dois paramentros:
            1 - nome do atributo 
            2 - o que vai passar para o atributo

    *getAttribute
        - Pega o atributo de um elemento.

*/

    // const link = document.querySelector('a') // const link tem a tag <a>

    // console.log(link.getAttribute('href')) //pegando o atributo href que contém na const link

    // link.setAttribute('href', 'https://twitter.com/GabrielCarniel') //passando uma url para o atributo href da const link
    // link.innerText = 'Twitter do Gabriel' // passando um texto 

    // const p = document.querySelector('p.error') //pegando a classe error do meu paragrafo
    // p.setAttribute('class', 'success') //setando a class que se chamava error para sucess

    // p.setAttribute('style', 'color: red;') //setando um style para o meu paragrafo p

/*Modificando estilos CSS
    usando a propriedade STYLE podemos passar os estilos CSS que desejarmos
    é preferível usar a propriedade STYLE, pois os estilos existentes não serão substituídos.
*/
    // const title = document.querySelector('h2')
    // title.setAttribute('style', 'margin: 50px;') //dessa forma o style do setAttribute vai sobrescrever a existente.
    
    // title.style.color = 'green' //mudando cor para verde
    // title.style.fontSize = '2em' //aumentando a font

    // title.style.removeProperty('color') //removendo a propriedade color
    // title.style.color = '' //removendo a propriedade color, mas de outra forma

/*Obtendo, adicionando, removendo e alterando classes CSS
    - classList mostra uma lista com todas as classes
    - classList.add() - adiciona uma classe ao elemento
    - classList.remove() - remove a classe do elemento
    - classList.toggle() - alterna a  classe. Se a classe passada por argumento existe ele vai remover,
        se não existir ele vai criar.
*/
    // const paragraph = document.querySelector('p.error')
    // console.log(paragraph.classList) //classList mostra uma lista com todas as classes
    
    // paragraph.classList.add('nova') //adiciona uma classe passada como argumento
    // console.log(paragraph.classList) //classList mostra uma lista com todas as classes

    // paragraph.classList.remove('nova') //remove a classe passada como argumento
    // console.log(paragraph.classList) //classList mostra uma lista com todas as classes

    /*TEXTCONTENT
        É parecida com a innerText, mas a textContent exibe o texto mesmo que ele não esteja visível,
        como por exemplo de um estilo que oculta o texto.
        A innerText vai mostrar apenas aquele que está visível.
    */

    const paragraphs = document.querySelectorAll('p')
    // console.log(paragraphs)

    paragraphs.forEach(p => {
        const success = 'success'
        const error = 'error'
        const includesSuccess = p.textContent.includes(success)
        const includesError = p.textContent.includes(error)
        const classList = p.classList

        if(includesSuccess){
            classList.add(success)
        }else if (includesError) {
            classList.add(error)
        }
    })