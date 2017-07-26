function Mostrar()
{
i=prompt("ingrese numero")
i=parseInt(i);
cont=0
for(num=1;num<i;num++)
{
    if(i%num==0)
    {
        cont++;
    }
    
 }
 if(cont>2)
 {
     alert("ES primo");
 }
 else
 {
     alert("no es primo");
 }
}