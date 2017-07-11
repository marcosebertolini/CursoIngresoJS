function Mostrar()
{

	var contador=0;
	var acumulador=0;
    var num;



while(contador<5)
{
	contador++;
	num = prompt("ingrese un numero");
	num = parseInt(num);
	while(isNaN(num))
	{
		num= prompt("Ingrese un Número. ");
		num = parseInt(num);
	}
	acumulador= acumulador+num;

}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN