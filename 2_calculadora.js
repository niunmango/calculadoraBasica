const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

function sumar() {
  const numero1Valor = Number(numero1.value);
  const numero2Valor = Number(numero2.value);

  resultado.innerHTML = `Suma: ${numero1Valor + numero2Valor}`;
}

function restar() {

  const numero1Valor = Number(numero1.value);
  const numero2Valor = Number(numero2.value);

  resultado.innerHTML = `Resta: ${numero1Valor - numero2Valor}`;
}

function multiplicar() {
  const numero1Valor = Number(numero1.value);
  const numero2Valor = Number(numero2.value);

  resultado.innerHTML = `Multplicación: ${numero1Valor * numero2Valor}`;
}

function dividir() {
  const numero1Valor = Number(numero1.value);
  const numero2Valor = Number(numero2.value);
  if (numero2Valor != 0) {

  resultado.innerHTML = `División: ${numero1Valor / numero2Valor}`;
  } else {
    resultado.innerHTML = `No se puede dividir por cero`;
  }
}