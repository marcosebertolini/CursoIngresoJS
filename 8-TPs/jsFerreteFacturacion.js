/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var pre1
    var pre2
    var pre3
    var resultado
function Sumar () 
{
	var pre1
    var pre2
    var pre3
    var resultado
    pre1 = document.getElementById("PrecioUno").value;
    pre2 = document.getElementById("PrecioDos").value;
    pre3 = document.getElementById("PrecioTres").value;
    pre1 = parseInt(pre1);
    pre2 = parseInt(pre2);
    pre3 = parseInt(pre3);
    resultado = pre1+pre2+pre3
    alert(resultado);
}
function Promedio () 
{
    pre1 = document.getElementById("PrecioUno").value;
    pre2 = document.getElementById("PrecioDos").value;
    pre3 = document.getElementById("PrecioTres").value;
    pre1 = parseInt(pre1);
    pre2 = parseInt(pre2);
    pre3 = parseInt(pre3);
    resultado=(pre1+pre2+pre3)/3;
    alert(resultado);
    
}
function PrecioFinal () 
{
    var resultadoiva
	pre1 = document.getElementById("PrecioUno").value;
    pre2 = document.getElementById("PrecioDos").value;
    pre3 = document.getElementById("PrecioTres").value;
    pre1 = parseInt(pre1);
    pre2 = parseInt(pre2);
    pre3 = parseInt(pre3);
    resultado = (pre1+pre2+pre3)*0.21
    resultadoiva= resultado+(pre1+pre2+pre3)
    alert("resultado = "+ resultadoiva);
}