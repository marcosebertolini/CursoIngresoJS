/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo
var ancho
var radio
var resultado
var resultadoF
function Rectangulo () 
{
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    resultado = (2*largo) + (2*ancho);
    resultadoF= resultado*3;
    alert(resultadoF);

   
}
function Circulo () 
{
	radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    resultado = 2*Math.PI*radio;
    resultadoF= resultado*3;
    alert(resultadoF);

}
function Materiales () 
{
	var cal
    var ceme
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cal = ancho*largo*3;
    ceme = ancho*largo*2;
    alert("las bolsas de cemento= "+ceme+" y de cal= "+cal);



}