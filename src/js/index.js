/* 

OBJETIVO 1 - quando o usuario clicar no botão veja o trailer, devemos abrir o modal com o video do trailer

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal


OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemmos abrir a modal com o video do trailer
        - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
        -passo 2 - dar um jeito de indentificar quando o usuário clicar no botão
        passo 3 - dar um jeito de pegar o elemento da modal js
        passo 4 -abrir modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
   - passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js 
   -passo 2 - dar um jeito de indentificar quando o usuario clicar no X
   - passo 3 - fechar a modal
   

*/


const botaoTrailer = document.querySelector(".botao-trailer");

const video = document.getElementById("video");

const linkDoVdeo = video.src;

const botaoFecharModal = document.querySelector(".fechar-modal");

const modal = document.querySelector(".modal");

function alternarModal(){
  modal,classic.toggle("aberto");
 
}


botaoTrailer.addEventListener("click", () => {
  
  modal.classList.add("aberto");
  video.setAttribute("src", linkDoVdeo);
});
 
 

     botaoFecharModal.addEventListener("click", () => {
    
    modal.classList.remove("aberto");
    video.setAttribute("src", "");


  })

 


 


