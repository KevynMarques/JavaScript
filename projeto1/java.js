function verde() {
  document.querySelector('#bot').classList.remove('amarelo');
  document.querySelector('#bot').classList.remove('vermelho');
  document.querySelector('#bot').classList.remove('azul');
  document.querySelector('#bot').classList.add('verde');

}

function  vermelho() {
  document.querySelector('#bot').classList.remove('amarelo');
  document.querySelector('#bot').classList.remove('verde');
  document.querySelector('#bot').classList.remove('azul');
  document.querySelector('#bot').classList.add('vermelho');

}

function azul() {
  document.querySelector('#bot').classList.remove('amarelo');
  document.querySelector('#bot').classList.remove('vermelho');
  document.querySelector('#bot').classList.remove('verde');
  document.querySelector('#bot').classList.add('azul');

}

function amarelo() {
  document.querySelector('#bot').classList.remove('vermelho');
  document.querySelector('#bot').classList.remove('verde');
  document.querySelector('#bot').classList.remove('azul');
  document.querySelector('#bot').classList.add('amarelo');

}