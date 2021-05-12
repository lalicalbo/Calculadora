function calculadora (parcial1, parcial2, pro, lab) {
  var parcial1 = parseFloat(document.getElementById('p1').value)
  var parcial2 = parseFloat(document.getElementById('p2').value)
  var lab = parseFloat(document.getElementById('lab').value)
  var pro = parseFloat(document.getElementById('pro').value)

  var promedio_parciales = (parcial2 + parcial1) / 2
  var promedio_total = (parcial1 + parcial2 + lab + pro) /  4
  var respuesta = ''
  if (promedio_parciales < 3) {
    promedio_total = parcial1 * 0.3 + parcial2 * 0.3 + lab * 0.2 + pro * 0.2
  } else if (promedio_parciales > 4 && lab > 4.5 && pro < lab) {
    lab = pro
    promedio_total = parcial1 * 0.25 + parcial2 * 0.25 + lab * 0.25 + pro * 0.25
  }
  if (promedio_total > 3) {
    respuesta = 'Su nota final es ' + promedio_total + ' Aprobó'
  } else if (promedio_total < 3) {
    respuesta = 'Su nota final es ' + promedio_total + ' Reprobó'
  }

  document.getElementById('resultado').innerHTML = respuesta
}
