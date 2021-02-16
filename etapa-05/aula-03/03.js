const title = document.querySelector('title')
title.innerText = 'Anotações Etapa 05 - Aula 03-03'

/*
    addEventListener() - Este método vai 'escutar' um determinado evento que é passado como primeiro argumento
                         Já o segundo argumento deve ser uma callbak que irá executar a ação do evento.
*/



const ul = document.querySelector('ul')
// ul.remove() //removendo um elemento

const lis = document.querySelectorAll('li')
lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target

        // clickedElement.style.textDecoration = 'line-through'
        clickedElement.remove()
    })
    li.addEventListener('mousemove', event => {
        event.target.style.color = 'red'
    })
    li.addEventListener('mouseout', event => {
        event.target.style.color = ''
    })
})


const button = document.querySelector('button')
button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    // ul.append(li) //append insere o elemento passado (li) por argumento como ultimo filho do elemento encadeado, no caso ul
    ul.prepend(li) //append insere o elemento passado (li) por argumento como primeiro filho do elemento encadeado, no caso ul
})