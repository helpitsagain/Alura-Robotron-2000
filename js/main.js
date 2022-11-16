const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

const controle = document.querySelectorAll('.controle-ajuste')
const componente = document.querySelectorAll('.controle-contador')


controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
    })
}
)


function manipulaDados(operacao) {
    if (operacao === '-'){
        braco.value = parseInt(braco.value) - 1
    } else if (operacao === '+'){
        braco.value = parseInt(braco.value) + 1
    }
}