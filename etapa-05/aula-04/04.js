const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
    console.log(popup)
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        // console.log(classNameOfClickedElement)
        popup.style.display = 'none'
    }
})

// método SOME ao retornar true sai do loop de sua callback, ao contrário do filter que vai percorrer todo array.