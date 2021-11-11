let SeuVotoPara = document.querySelector('.voto span');
let cargo = document.querySelector('.candidato span');
let info = document.querySelector('.info');
let aviso = document.querySelector('.avisos');
let lateral = document.querySelector('.direita');
let numeros = document.querySelector('.numeros');
let direita = document.querySelector('.direita');

let etapaAtual =0;
let numero ="";
let Vbranco = false;

function começarEtapa (){

let etapa = etapas[etapaAtual];

let numeroshtml = '';
numero ='';
Vbranco = false; 

for (let i=0;i<etapa.numeros;i++) {

    if(i === 0) {
      numeroshtml +='<div class="digitos pisca"></div>';
    }
    numeroshtml +='<div class="digitos"></div>';
}
SeuVotoPara.style.display = 'none';
cargo.innerHTML = etapa.titulo;
info.innerHTML = '';
aviso.style.display = 'none';
lateral.innerHTML = '';
numeros.innerHTML = numeroshtml;
   
}

function salvandoDigitos (){
   
   let etapa = etapas[etapaAtual];
   let candidato = etapa.candidatos.filter((item)=>{
       if(item.numero === numero ) {
          return true;
       } else {
          return false;
       }
   });


if (candidato.length>0) {
   candidato = candidato[0];
   SeuVotoPara.style.display = 'block';
   aviso.style.display ='block';
   info.innerHTML = `Nome:${candidato.nome} <br/> Partido: ${candidato.partido}`;
   let fotosHTML = '';


   for(let i in candidato.fotos) {

      if(candidato.fotos[i].small) {

         fotosHTML += 
         `<div class="conteudoDireita">
         <img class="small" src="./imagens/${candidato.fotos[i].url}" alt="p">${candidato.fotos[i].legenda}</div>`;
      } else {

         fotosHTML += 
         `<div class="conteudoDireita">
         <img class= "big" src="./imagens/${candidato.fotos[i].url}" alt="p">${candidato.fotos[i].legenda}</div>`;

      }
   }

   lateral.innerHTML = fotosHTML; 
} else {
   SeuVotoPara.style.display = 'block';
   aviso.style.display ='block';
   info.innerHTML = '<div class="nulo pisca">VOTO NULO</div>';
}


}

function clicou(n) {
 
 let elNumeros = document.querySelector('.digitos.pisca');
 if(elNumeros !== null){

    elNumeros.innerHTML =n;
    numero = `${numero}${n}`;
    elNumeros.classList.remove('pisca');
    if(elNumeros.nextElementSibling !== null) {
    elNumeros.nextElementSibling.classList.add('pisca');
   } else {
      salvandoDigitos();
   }
 }
    
}

function branco () {
    if(numero ===''){
       Vbranco = true;
       SeuVotoPara.style.display = 'block';
       aviso.style.display = 'block';
       numeros.innerHTML = '';
       info.innerHTML = `<div class="Vbranco pisca">VOTO EM BRANCO</div>`;
    }else { 
     alert ('Para votar em branco, não pode haver digitos, aperte corrigir para limpar.')  
    }
}

function corrige() {
    começarEtapa();
}

function confirma() {
   let etapa = etapas[etapaAtual];
    let votoConfirmado = false

   if(Vbranco === true) {
      votoConfirmado = true; 
   } else if (numero.length > etapa.numeros) {
       votoConfirmado = true ;
   }
   
   if(votoConfirmado) {

      etapaAtual++;
      if(etapas[etapaAtual] !== undefined) {
         começarEtapa();

      } else {
          
         document.querySelector('.tela').innerHTML = '<div class="FIM pisca">FIM</div>';
       
      }
   }
}

começarEtapa ();

