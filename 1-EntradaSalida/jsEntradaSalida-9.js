/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var mas10;
var porcentaje;
sueldo= document.getElementById("sueldo").value;
mas10= parseInt(sueldo);
porcentaje= mas10 + (mas10*0.1)
document.getElementById("resultado").value= porcentaje;


	
}
