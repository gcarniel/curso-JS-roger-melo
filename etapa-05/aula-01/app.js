/*DOCUMENT
    É o coração de uma web page.
    Ele é criado pelo browser para que seja possível interagir com a página através de JS.
    document é um objeto e ele tem muitos métodos e propriedades.
*/

/*QUERY SELECTOR
    - Usamos para selecionar algo da página, pode ser: id, classe ou atributo.
    - Ele seleciona o primeiro seletor encontrado, o restante é ignorado.
    - Já o quesr selector all selecionadas todos encontrados.
    - É o mais recomendado.
    - Retorna um NodeList.
*/
    const paragraph = document.querySelector('p') //selecionando a tag  p
    console.log(paragraph)

    const classeErrorP = document.querySelector('.error') //selecionando classe classe error
    console.log(classeErrorP)

    const classeErrorDiv = document.querySelector('div.error') //selecionando classe error da div
    console.log(classeErrorDiv)

    const paragraphs = document.querySelectorAll('p') //selecionando todas as tags p.
    paragraphs.forEach(p => console.log(p))
    console.log(paragraphs)

    const classeErrors = document.querySelectorAll('.error') //selecionando todas as classes erro.
    console.log(classeErrors)
    classeErrors.forEach(e => console.log(e))


/*OUTRAS MENEIRAS DE SELECIONAR ELEMENTOS
    - getElementById('id') 
        - Seleciona um elemento através de seu ID.
        - Não precisa passar o identificador de id '#' pois o método ja tem implicito.

    - getElementsByClassName('classe') 
        - Seleciona uma elemento através do nome da classe.
        - Não precisa passar o identificador de classe '.' pois o método ja tem implicito.
        - Retorna um HTMLCollection e não tem disponível o FOREACH.
    - getElementsByTagName
        - Seleciona uma elemento através do nome da sua tag.
        - Retorna um HTMLCollection e não tem disponível o FOREACH.
*/

    const id = document.getElementById('title') //selecionando elemento através de seu id.
    console.log(id)

    const className = document.getElementsByClassName('error') //selecionando elementos através de seu nome de classe.
    console.log(className)

    const tagName = document.getElementsByTagName('p') //selecionando elementos através de sua tag
    console.log(tagName)