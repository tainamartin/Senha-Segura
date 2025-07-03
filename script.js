const numeroSenha = document.querySelector(".parametro-senha__texto")
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha
const botoes = document.querySelectorAll(".parametro-senha__botao")
const checkbox = document.querySelectorAll('.checkbox')
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '*%?@!'



function diminuiTamanho(){
    if(tamanhoSenha>1){
        tamanhoSenha --
    }
numeroSenha.textContent = tamanhoSenha
geraSenha()

}
botoes[0].onclick = diminuiTamanho
function aumentaTamanho (){
    if (tamanhoSenha<20){
        tamanhoSenha ++
    }
   numeroSenha.textContent= tamanhoSenha
   geraSenha()
}


botoes[1].onclick = aumentaTamanho

const campoSenha = document.querySelector('#campo-senha')
for(i=0; i<checkbox.length; i++){
checkbox[i].onclick=geraSenha
}


function geraSenha(){
    let alfabeto =''
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }
    let senha = ''
    for(let i =0; i< tamanhoSenha; i++){

        let numeroAleatorio = Math.random()*alfabeto.length;
       numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio]
    }
    campoSenha.value = senha
    classificaSenha()
}
const forcaSenha=document.querySelector('.forca')
function classificaSenha(){
    console.log('8')
    forcaSenha.classList.remove('fraca','media','forte')
    if(tamanhoSenha>11){
        forcaSenha.classList.add('forte')
    }else if(tamanhoSenha>5 && tamanhoSenha<12){
        forcaSenha.classList.add('media')
    }else if(tamanhoSenha<=5){
        forcaSenha.classList.add('fraca')
    }
}
