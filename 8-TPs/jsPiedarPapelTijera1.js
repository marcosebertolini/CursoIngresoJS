/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var usuario;
function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*3)+1
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
switch(eleccionMaquina)
{
    case 1:
    alert("EMPATE")
    break;
    case 2:
    alert("PERDIO");
    break;
    case 3:
    alert("GANO");
    break;
    
}

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina)
    {
        case 1:
        alert("GANO");
        break;
        case 2:
        alert("EMPATE");
        break;
        case 3:
        alert("PERDIO");
        break;
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(eleccionMaquina)
    {
        case 1:
        alert("PERDIO");
        break;
        case 2:
        alert("GANO");
        break;
        case 3:
        alert("EMPATE");
        break;
    }

}//FIN DE LA FUNCIÓN