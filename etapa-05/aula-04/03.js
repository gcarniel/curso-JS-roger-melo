
/*04-02
    event bubbling - No exemplo abaixo, ao clicar em li vai propagar um evento em li e consequentemente 
        em seu pai e assim adiante (li > ul > body) até chegar no topo do DOM. Para que isso não aconteça basta usar o 'stopPropagation()
        Então ao executar um evento em um elemento ele vai propagar a ação até o topo do DOM nos elementos pai, desde que o pai tenha o mesmo evento.

    <body>
        <ul>
            <li>
*/
// ul.addEventListener('click', event => {
//     const clickedElement = event.target
//     if(clickedElement.tagName === 'LI'){
//         clickedElement.remove()
//     }
//     event.stopPropagation()
//     console.log('clicou na ul')
//     console.log(event.target)
// })

const paragraph = document.querySelector('.copy-me')
paragraph.addEventListener('copy', () => {
    console.log('Texto copiado')
})

// offsetX pega o eixo X (horizontal da esquerda p/ direita) do container
// offsetY pega o eixo Y (vertical de cima p/ baixo) do container

const div = document.querySelector('.box')
div.addEventListener('mousemove', event => {
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
    // console.log(event.offsetX, event.offsetY)
})

// pageX pega o eixo X (horizontal da esquerda p/ direita) da pagina.
// pageY pega o eixo Y (vertical de cima p/ baixo) da pagina.

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
})