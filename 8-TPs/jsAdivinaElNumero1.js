/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numusuario;
function comenzar()
{
  numeroSecreto=parseInt(Math.random()*100)+1
  contadorIntentos=0
  numusuario=0
}

function verificar()
{
contadorIntentos+=1
document.getElementById("intentos").value= contadorIntentos;
numusuario=document.getElementById("numero").value;
if(numusuario==numeroSecreto)
{
  alert("GANASTE! en tan solo "+contadorIntentos+" oportunidades");
}

else
{
  if(numusuario<numeroSecreto)
  {
    parseInt()
    alert("UN POCO MAS!"+(numeroSecreto-numusuario));
  }
  else
  {
    alert("UN POCO MENOS!")
  }
}
	
}