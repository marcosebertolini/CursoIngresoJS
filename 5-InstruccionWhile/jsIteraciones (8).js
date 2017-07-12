function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta=true;
while(respuesta==true)
{
	contador++;
	num=prompt("Ingresar Numero");
	num=parseInt(num);
    if(num>=0)
	{
		positivo+=num;
	}
    else
	{
		negativo*=num;
	}





	respuesta=confirm();
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN