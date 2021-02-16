const title = document.querySelector('title')
title.innerText = 'Anotações Etapa 05 - Aula 03-02'

/*
    PARENTS | CHILDREN | SIBLINGS

    Array.from(article.children) -> transforma um HTMLCollection em um array
*/

/*  Children
    Procuramos um elemento e através dele pegamos todos os seus filhos com a propriedade children
*/
    const article = document.querySelector('article')
    console.log(article.children)

    Array.from(article.children).forEach(element => {
        element.classList.add('article-element')
    })

/*  Parent
    Procuramos um elemento e através dele podemos saber quem é seu pai através da propriedade parentElement
*/
    const h2 = document.querySelector('h2')
    console.log(h2.parentElement)

/*  SIBLINGS
    Procuramos um elemento e através dele podemos pegar seu próximo irmão com a propriedade nextElementSibling
    e podemos também pegar o anterior com a propriedade previousElementSibling
*/

    console.log(h2.nextElementSibling)  
    console.log(h2.previousElementSibling)  