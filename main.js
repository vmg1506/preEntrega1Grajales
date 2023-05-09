document.getElementById("submit").onclick = function() {
    let intentos = 0;
    for (let i = 1; i <= 5; i++) {
        if(intentos <1){
            let nombre_asesor1 = prompt("Ingrese el nombre del asesor");
            document.getElementById("name1").innerHTML = nombre_asesor1;
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale1").innerHTML = venta_asesor1;
            document.getElementById("fee1").innerHTML = calular_propina(venta_asesor1);
            intentos++;
            alert("PRIMER CICLO TERMINADO");
        }else if(intentos == 1){
            let nombre_asesor1 = prompt("Ingrese el nombre del asesor");
            document.getElementById("name2").innerHTML = nombre_asesor1;
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale2").innerHTML = venta_asesor1;
            document.getElementById("fee2").innerHTML = calular_propina(venta_asesor1);
            intentos++;
            alert("SEGUNDO CICLO TERMINADO");
        }else if(intentos == 2){
            let nombre_asesor1 = prompt("Ingrese el nombre del asesor");
            document.getElementById("name3").innerHTML = nombre_asesor1;
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale3").innerHTML = venta_asesor1;
            document.getElementById("fee3").innerHTML = calular_propina(venta_asesor1);
            intentos++;
            alert("TERCER CICLO TERMINADO");
        } else if(intentos == 3){
            let nombre_asesor1 = prompt("Ingrese el nombre del asesor");
            document.getElementById("name4").innerHTML = nombre_asesor1;
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale4").innerHTML = venta_asesor1;
            document.getElementById("fee4").innerHTML = calular_propina(venta_asesor1);
            intentos++;
            alert("CUARTO CICLO TERMINADO");
        }else if(intentos == 4){
            let nombre_asesor1 = prompt("Ingrese el nombre del asesor");
            document.getElementById("name5").innerHTML = nombre_asesor1;
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale5").innerHTML = venta_asesor1;
            document.getElementById("fee5").innerHTML = calular_propina(venta_asesor1);
            intentos++;
            alert("ULTIMO CICLO TERMINADO");
        }
    }
    
}


function calular_propina (valor) {
    let fee = 0.25;
    valor = valor * fee;
    return valor
   
    
}
