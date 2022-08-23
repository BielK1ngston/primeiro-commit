
    document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('#botao')
    botao.addEventListener('click', (e) => {
        e.preventDefault()
        location.href = "./teste.html"
    })
})
    