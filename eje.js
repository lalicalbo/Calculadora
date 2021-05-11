
function calculadora(parcial1,parcial2,pro,lab){

var parcial1 = document.getElementById("p1").value;
var parcial2 = document.getElementById("p2").value;
var lab = document.getElementById("lab").value;
var pro = document.getElementById("pro").value;

var promedio_parciales = (parcial2 + parcial1) / 2;
var promedio_total = (parcial1 + parcial2 + lab + pro) / 4;


if (promedio_parciales < 3) {
    alert( " Su promedio de parciales de " + (promedio_total = parcial1 * .30 + parcial2 * .30 + lab * .20 + pro * .20 ) + "puntos, es menor a 3. ");
}
else if(promedio_parciales > 4 && lab > 4.5 && pro < lab){
    alert( lab = pro);
}
if(promedio_total >3){
    alert(" Su nota final es " + promedio_total + " Aprobó");

}
else if (promedio_total <3){
    alert(" Su nota final es " + promedio_total + " Reprobó");
}


}












