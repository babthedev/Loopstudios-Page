const menu = document.querySelector('.menu')
const clos = document.querySelector('.close')
const nav = document.querySelector('.nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
clos.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})