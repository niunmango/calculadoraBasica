let operando1 = "";
let operando2 = "";
let operador = "";
let resultado = "";

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const copiarNumeros = document.getElementById("copiarNumeros");
const numerosCopiados = document.getElementById("numerosCopiados");

copiarNumeros.addEventListener("click", function() {
  const numero1Valor = numero1.value;
  const numero2Valor = numero2.value;
  
  numerosCopiados.innerHTML = `Número 1: ${numero1Valor}<br>Número 2: ${numero2Valor}`;
});


function agregarNumero(numero) {
  if (operador === "") {
    operando1 += numero;
    actualizarPantalla(operando1);
  } else {
    operando2 += numero;
    actualizarPantalla(operando2);
  }
}

function agregarOperador(op) {
  operador = op;
}

function calcular() {
  let num1 = parseFloat(operando1);
  let num2 = parseFloat(operando2);
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      resultado = "";
      break;
  }
  actualizarPantalla(resultado);
  operando1 = resultado;
  operando2 = "";
  operador = "";
}

function borrarPantalla() {
  operando1 = "";
  operando2 = "";
  operador = "";
  resultado = "";
  actualizarPantalla("");
}

function actualizarPantalla(valor) {
  document.getElementById("pantalla").value = valor;
}

