const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const copiarNumeros = document.getElementById("copiarNumeros");
const numerosCopiados = document.getElementById("numerosCopiados");

copiarNumeros.addEventListener("click", function() {
  const numero1Valor = numero1.value;
  const numero2Valor = numero2.value;
  
  numerosCopiados.innerHTML = `Número 1: ${numero1Valor}<br>Número 2: ${numero2Valor}`;
});