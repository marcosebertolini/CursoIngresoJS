function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var promepos;
	var promeneg;
	var respuesta=true;
    var acuneg=0;
	var acupos=0;
	var contpos=0;
	var contneg=0;
	var contcero=0;
	var contpares=0;
	var diferencia;
	while(respuesta==true)
	{
		num= prompt("Ingresar numero...");
		num = parseInt(num);
		while(isNaN(num))
		{
			num=prompt("Ingrese un numero!")
		}
	if(num<0)
	{
		acuneg+=num;
		contneg++;
	}
	if(num>0)
	{
		acupos+=num;
		contpos++;
	}
	if(num==0)
	{
		contcero++;
	}
	if(num%2==0)
	{
		contpares++;
	}
    respuesta=confirm("desea seguir???")
	}//endwhile
	promepos=contpos/acupos;
    promeneg= contneg/acuneg;
	diferencia= contpos-contneg;
	document.write(diferencia+promepos+promeneg);

    




}//FIN DE LA FUNCIÓN