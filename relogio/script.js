let digitalElement = document.querySelector('.digital'); 
let ponteiroElement = document.querySelector('.p_s');
let minutoElement = document.querySelector('.p_m');
let horaElement = document.querySelector('.p_h');

function atualizarRelogio( ){
   
  let agora = new Date();
  let hora = agora.getUTCHours(); 
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds ();

  digitalElement.innerHTML = `${zeroF(hora)}:${zeroF(minutos)}:${zeroF(segundos)}`;

  /*-----------RELOGIO ANALOGICO -----------*/
  let ponteiroDeg = ((360 / 60) * segundos) - 90;     
  let minutoDeg = ((360 / 60) * minutos) - 90; 
  let horaDeg = ((360 / 12) * hora) - 90; 


   ponteiroElement.style.transform =  `rotate(${ponteiroDeg}deg)`;
   minutoElement.style.transform = `rotate(${minutoDeg}deg)`;
   horaElement.style.transform = `rotate(${horaDeg}deg)`;
}


function zeroF(time) {
  if(time <10){
    return '0' + time; 
  } else {
    return time; 
  }
}


setInterval (atualizarRelogio,1000); 
atualizarRelogio();