/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numusu;

function comenzar()
{
	numeroSecreto=parseInt(Math.random()*100)+1;
	
}

function verificar()
{
	contadorIntentos+=1;
	document.getElementById("intentos").value=contadorIntentos;
	numusu=document.getElementById("numero").value;
	if(numusu==numeroSecreto)
	{
		if(contadorIntentos==1)
		{
			alert("USTED ES PSIQUICO")
		}
		else
		{
			if(contadorIntentos==2)
			{

			alert("exelente percepcion")
			}
			else
			{
				if(contadorIntentos==3)
				{
					alert("esto es suerte!!!")
				}
				else
				{
					if(contadorIntentos==4)
					{
						alert("EXELENTE TECNICA PAPA!")
					}
					else
					{
						if(contadorIntentos==5)
						{
							alert("ESTAS A MEDIDA AMIGO!")
						}
						else
						{
                          if(contadorIntentos>6 && contadorIntentos<10)
						  {
							  alert("falta tecnica")
						  }
						  else
						  {
							  alert("afortunado en el amor...")
						  }
						}
					}
					
				}
			}
		}
	}
    else
	{
		
	}
	

}