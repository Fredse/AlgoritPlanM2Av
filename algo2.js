var height = prompt("Por favor digite la estatura del jugador");

function bioTipo(){
    if(height < 1.70){
        alert("biotipo bajo");
    }else{
        if(height <= 1.70 || height < 1.80){
            alert("biotipo promedio");
        }else{
        }
        if(height >= 1.80){
            alert("biotipo Superior");
        }
    }
}

bioTipo();