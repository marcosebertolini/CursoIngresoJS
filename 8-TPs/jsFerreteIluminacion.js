/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
 	var lampara;
    var resultado;
    var precio = 35
    var resultadoF
    var marca
    lampara= document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    if(lampara>=6)
    {
        resultado =(precio* lampara)*0.5
        resultadoF = (precio * lampara)-resultado
        document.getElementById("precioDescuento").value= resultadoF;
    }
    else
    {
        if(lampara==5 && marca=="ArgentinaLuz")
        {
            resultado = lampara*precio*0.4
            resultadoF = (lampara*precio)-resultado
            document.getElementById("precioDescuento").value= resultadoF;
        }
        else
        {
            if(lampara==4 && marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
            resultado = (lamparas * precio)*0.25

        }
        if(lampara==3)
        {
            if(marca=="ArgentinaLuz")
            {
                resultado = lampara*precio*0.15
                resultadoF = (lampara*precio)-resultado
                document.getElementById("precioDescuento").value = resultadoF
            }
            
        }
    }
}
