function Mostrar()
{
//tomo la edad  

	var edad
    var estado
    edad= document.getElementById("edad").value;
    estado = document.getElementById("estadoCivil").value;
    if(edad<18 && estado!="Soltero")
    {
        alert("es muy joven para no ser soltero!");
    }

}//FIN DE LA FUNCIÓN