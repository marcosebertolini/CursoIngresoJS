/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var resultado;
var contgano=0;
var contperdio=0;
var contempato=0;
function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*3)+1
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
    comenzar()
switch(eleccionMaquina)
{
    case 1:
    resultado="Empato";
    contempato++;
    break;
    case 2:
    contperdio++;
    resultado="Perdio";
    break;
    case 3:
    contgano++;
    resultado="Gano";
    break;
    
}
mostrar()
}//FIN DE LA FUNCIÓN
function papel()
{
    comenzar()
    switch(eleccionMaquina)
    {
        case 1:
        contgano++;
        resultado="Gano"
        break;
        case 2:
        contempato++;
        resultado="Empato";
        break;
        case 3:
        contperdio++;
        resultado="Perdio";
        break;
    }
mostrar()
}//FIN DE LA FUNCIÓN
function tijera()
{
    comenzar()
    switch(eleccionMaquina)
    {
        case 1:
        contperdio++;
        resultado="Perdio";
        break;
        case 2:
        contgano++;
        resultado="Gano"
        break;
        case 3:
        contempato++;
        resultado="Empato";
        break;
    }
mostrar()
}//FIN DE LA FUNCIÓN
function mostrar()
{
    if(contgano>contperdio+contempato)
    {
        contgano-=1
    }
    alert(" Usted  "+resultado+ " Ganadas "+contgano+" Empatadas "+contempato+" Perdidas "+contperdio);
    
}
