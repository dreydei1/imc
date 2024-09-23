var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var dadosPaulo = document.querySelector('#linhaPaulo');
var peso = dadosPaulo.query.querySelector('.info-peso').textContent;
var altura = dadosPaulo.querySelector('.info-altura').textContent;
var imc = peso / (altura * altura);
dadosPaulo.querySelector('.info-imc').textContent = imc