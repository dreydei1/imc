var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var paulo = document.querySelector('.paciente1');
var peso = dadosPaulo.query.querySelector('.info-peso').textContent;
var altura = dadosPaulo.querySelector('.info-altura').textContent;
var imc = peso / (altura * altura);
paulo.querySelector('.info-imc').textContent = imc;