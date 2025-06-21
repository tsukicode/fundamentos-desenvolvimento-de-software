const botao = document.querySelector("#botao");//variável botao
const mensagem = document. querySelector("#mensagem");//variável mensagem

botao.addEventListener('click', mostraMensagem);//evento ao clicar

function mostraMensagem(){
    //função ao clicar: exibir mensagem
    mensagem.innerHTML=("*:･ﾟ✧ Bem vindo! Conheça um pouco dos meus hobbies e preferências. *:･ﾟ✧");
}