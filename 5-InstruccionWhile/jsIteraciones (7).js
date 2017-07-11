function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
    var num;
	while(respuesta=="si")
	{
		contador++;
		num = prompt("Ingrese...");
		num = parseInt(num);
		while(isNaN(num))
		{
			prompt("INGRESE UN NUMERO ,NO LETRA")
		}
		acumulador+=num
		respuesta=prompt("ingreso si o no, si desea continuar");


	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN