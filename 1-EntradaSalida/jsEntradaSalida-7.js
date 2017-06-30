/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{
var num1
var num2	
var sum1
var sum2
var resultados
num1= document.getElementById("numeroUno").value;
num2 = document.getElementById("numeroDos").value;
sum1 = parseInt(num1);
sum2 = parseInt(num2);
resultados= (sum1+sum2);
alert("la suma es= "+resultados);
}

function restar()
{
    var res1
    var res2
    var resultador
    num1= document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    res1= parseInt(num1);
    res2=parseInt(num2);
    resultador= (res1-res2);
    alert("la resta es= "+ resultador);
}

function multiplicar()
{ 
	var mult1
    var mult2
    var resultadom
    num1= document.getElementById("numeroUno").value;
    num2= document.getElementById("numeroDos").value;
    mult1=parseInt(num1);
    mult2=parseInt(num2);
    resultadom= (mult1*mult2);
   alert("su multiplicacion es :"+ resultadom);
}

function dividir()
{
	var div1
    var div2
    var resultadod
    num1=document.getElementById("numeroUno").value;
    num2=document.getElementById("numeroDos").value;
    div1= parseInt(num1);
    div2= parseInt(num2);
    resultadod= div1/div2;
    alert("su divicion da :"+ resultadod);
}

