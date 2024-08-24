const contadorSpan = document.getElementById("contador");

document.getElementById("incrementar").addEventListener("click", function () {
  let contador = parseInt(contadorSpan.textContent);
  contador++;
  contadorSpan.textContent = contador;
});