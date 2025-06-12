const numeroSenha = document.querySelector(".parametro-senha__texto")
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha
const botoes = document.querySelectorAll(".parametro-senha__botao")
function diminuiTamanho(){
    if(tamanhoSenha>1){
        tamanhoSenha --
    }
numeroSenha.textContent = tamanhoSenha

}
botoes[0].onclick = diminuiTamanho
function aumentaTamanho (){
    if (tamanhoSenha<20){
        tamanhoSenha ++
    }
   numeroSenha.textContent= tamanhoSenha
}

botoes[1].onclick = aumentaTamanho

const campoSenha = document.querySelector('#campo=senha')
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
campoSenha.value = letrasMaiusculas

function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(letrasMaiusculas[numeroAleatorio])
}

geraSenha()