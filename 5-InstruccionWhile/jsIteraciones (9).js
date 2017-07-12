function Mostrar()
{

	var contador=0;
	var max;
	var min;
	var bandera=true;
	var respuesta=true;
    var num;
	while(respuesta==true)
	{
		num=prompt("Ingrese numeros...");
	    num = parseInt(num);
        if(bandera)
		{
			max=num;
			min=num;
			bandera=false;
		}
		else
		{
			if(num>max)
			{
				max=num;
			}
			if(num<min)
			{
				min=num;
			}
		}
		respuesta=confirm("Quiere seguir?")
	}

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN