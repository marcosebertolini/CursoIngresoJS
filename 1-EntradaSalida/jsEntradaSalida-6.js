/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var num1
var num2
var result
var sum1
var sum2
num1 = document.getElementById("numeroUno").value;
num2 = document.getElementById("numeroDos").value;
sum1 = parseInt(num1);
sum2 = parseInt(num2);
result=(sum1+sum2);
alert("La suma es = "+result);
}

