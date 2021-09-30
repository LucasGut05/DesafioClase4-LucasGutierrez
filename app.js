let solicitarMonto = function () {
  monto = Number(prompt("Ingrese el valor del producto: "));
  return monto;
};

let solicitarCuotas = function () {
  cuotas = Number(prompt("Ingrese cantidad de cuotas: "));
  return cuotas;
};

function calcularTotal(monto, cuota) {
  if (cuota == 1) {
  let total = cuota;
  } else {
  }
  let total = ((cuota - 1) * 0.1 + 1) * monto;
  return total;
}

function calcularCuota(total, cuota) {
  let valorCuota = total / cuota;
  return valorCuota;
}

function mostrar(total, valorCuota, cuota) {
  if (cuota == 1) {
    prompt("El total a pagar es $" + total + ", en un solo pago.");
  } else {
    prompt(
      "El total a pagar es $" +
        total +
        ", en " +
        cuota +
        " cuotas de $" +
        valorCuota
    );
  }
}

solicitarMonto();
solicitarCuotas();
total1 = calcularTotal(solicitarMonto, solicitarCuotas);
cuota1 = calcularCuota(total1, solicitarCuotas);
mostrar(total1, cuota1, solicitarCuotas);
