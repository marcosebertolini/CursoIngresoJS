/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;
    var divi1;
    var divi2;
    var resultado;
    num1=document.getElementById("numeroDividendo").value;
    num2= document.getElementById("numeroDivisor").value;
    divi1= parseInt(num1);
    divi2= parseInt(num2);
    resultado= divi1%divi2;
    alert("su resto es= "+ resultado);

}
