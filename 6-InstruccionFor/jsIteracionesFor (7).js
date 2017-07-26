function Mostrar()
{
i=prompt("Ingrese un numero");
i=parseInt(i);
contdivi=0;
for(num=1;num<=i;num++)
{
    if(i%num==0)
    {
        contdivi++;
      
    }
}
alert(contdivi);


}//FIN DE LA FUNCIÓN