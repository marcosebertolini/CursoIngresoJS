function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota=parseInt(Math.random()*(11-1))+1
	if (nota==9 || nota==10)
	{
		alert("EXELENTE")
	}
	else
	{
		if(nota>4)
		{

		alert("APROBO")
		}
		else
		{
			alert("vamos la proxima se puede")
		}
	
	}
    
}//FIN DE LA FUNCIÓN