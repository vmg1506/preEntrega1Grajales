document.getElementById("submit").onclick = function() {
    let intentos = 0;
    let impuestos = 0.19;
    let sumatoria= 0;
    
    for (let i = 1; i <= 5; i++) {
        if(intentos <1){
            let nombre_asesor1 = prompt("Ingrese el nombre del primer asesor");
            document.getElementById("name1").innerHTML = nombre_asesor1;
            let nombre_empresa = prompt("Ingrese empresa A, B O C");
            nombre_empresa = nombre_empresa.toUpperCase();
            document.getElementById("company1").innerHTML = company(nombre_empresa);
            let venta_asesor1 = prompt("ingrese el valor_bono de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale1").innerHTML = venta(venta_asesor1, nombre_empresa);
            document.getElementById("comision1").innerHTML = comision_venta(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("fee1").innerHTML = calular_propina(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("bono1").innerHTML = bono(venta_asesor1);
            intentos++;
            if (company(nombre_empresa = "N/A")){
                sumatoria = sumatoria;
            }else {
                sumatoria = sumatoria + venta_asesor1;
            } 
            
            alert("PRIMER CICLO TERMINADO");
        }else if(intentos == 1){
            let nombre_asesor1 = prompt("Ingrese el nombre del segundo asesor");
            document.getElementById("name2").innerHTML = nombre_asesor1;
            let nombre_empresa = prompt("Ingrese empresa A, B O C");
            nombre_empresa = nombre_empresa.toUpperCase();
            document.getElementById("company2").innerHTML = company(nombre_empresa);
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale2").innerHTML = venta(venta_asesor1, nombre_empresa);
            document.getElementById("comision2").innerHTML = comision_venta(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("fee2").innerHTML = calular_propina(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("bono2").innerHTML = bono(venta_asesor1);
            intentos++;
            if (company(nombre_empresa = "N/A")){
                sumatoria = sumatoria;
            }else {
                sumatoria = sumatoria + venta_asesor1;
            }
            alert("SEGUNDO CICLO TERMINADO");
        }else if(intentos == 2){
            let nombre_asesor1 = prompt("Ingrese el nombre del tercer asesor");
            document.getElementById("name3").innerHTML = nombre_asesor1;
            let nombre_empresa = prompt("Ingrese empresa A, B O C");
            nombre_empresa = nombre_empresa.toUpperCase();
            document.getElementById("company3").innerHTML = company(nombre_empresa);
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale3").innerHTML = venta(venta_asesor1, nombre_empresa);
            document.getElementById("comision3").innerHTML = comision_venta(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("fee3").innerHTML = calular_propina(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("bono3").innerHTML = bono(venta_asesor1);
            intentos++;
            if (company(nombre_empresa = "N/A")){
                sumatoria = sumatoria;
            }else {
                sumatoria = sumatoria + venta_asesor1;
            }
            alert("TERCER CICLO TERMINADO");
        } else if(intentos == 3){
            let nombre_asesor1 = prompt("Ingrese el nombre del cuarto asesor");
            document.getElementById("name4").innerHTML = nombre_asesor1;
            let nombre_empresa = prompt("Ingrese empresa A, B O C");
            nombre_empresa = nombre_empresa.toUpperCase();
            document.getElementById("company4").innerHTML = company(nombre_empresa);
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale4").innerHTML = venta(venta_asesor1, nombre_empresa);
            document.getElementById("comision4").innerHTML = comision_venta(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("fee4").innerHTML = calular_propina(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("bono4").innerHTML = bono(venta_asesor1);
            intentos++;
            if (company(nombre_empresa = "N/A")){
                sumatoria = sumatoria;
            }else {
                sumatoria = sumatoria + venta_asesor1;
            }
            alert("CUARTO CICLO TERMINADO");
        }else if(intentos == 4){
            let nombre_asesor1 = prompt("Ingrese el nombre del quinto asesor");
            document.getElementById("name5").innerHTML = nombre_asesor1;
            let nombre_empresa = prompt("Ingrese empresa A, B O C");
            nombre_empresa = nombre_empresa.toUpperCase();
            document.getElementById("company5").innerHTML = company(nombre_empresa);
            let venta_asesor1 = prompt("ingrese el valor de la venta");
            venta_asesor1 = parseInt(venta_asesor1);
            document.getElementById("sale5").innerHTML = venta(venta_asesor1, nombre_empresa);
            document.getElementById("comision5").innerHTML = comision_venta(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("fee5").innerHTML = calular_propina(nombre_empresa, venta_asesor1, impuestos);
            document.getElementById("bono5").innerHTML = bono(venta_asesor1);
            intentos++;
            if (company(nombre_empresa = "N/A")){
                sumatoria = sumatoria;
            }else {
                sumatoria = sumatoria + venta_asesor1;
            }
            alert("ULTIMO CICLO TERMINADO");
        }
            
        
    }
    document.getElementById("total_ventas").innerHTML = sumatoria;
}

function company(company_name) {
    if (company_name == "") {
        return "N/A"
    }else if (company_name == "A" || company_name == "B" || company_name == "C"){
        return company_name
    }else {
        return "N/A"
    }
}


function venta (valor, nombre_empresa) {
    if (nombre_empresa == "" || nombre_empresa =="A" || nombre_empresa == "B" || nombre_empresa == "C") {
        return valor
    }else {
        return "N/A"
    }
}

function calular_propina (company_name, valor) {
    if (company_name == "") {
        return "N/A"
    }else if(company_name == "" || company_name =="A" || company_name == "B" || company_name == "C"){
        let fee = 0.25;
        valor = valor * fee;
        return valor
    }else {
        return "N/A"
    }
    
   
}

function comision_venta(company_name, precio, impuestos) {
    if (company_name == "A") {
        let descuento = 0.05;
        precio = precio * descuento;
        precio = precio * impuestos;
        return precio
    } else if (company_name == "B"){
         let descuento = 0.02;
         precio = precio * descuento;
         precio = precio * impuestos;
         return precio
    }else if (company_name == "C") {
        let descuento = 0.06;
        precio = precio * descuento;
        precion = precio * impuestos;
        return precio
    } else {
        return "VENTA NULA"
    }

}

function bono(valor_bono){
    if(valor_bono <15000){
        valor_bono=0;
        return valor_bono
    }else if(valor_bono >=15000 && valor_bono <= 25000) {
        valor_bono = 500;
        return valor_bono;
    } else if(valor_bono > 25000 && valor_bono <=35000) {
        valor_bono = 750;
        return valor_bono
    }else if(valor_bono > 35000){
        valor_bono = 1000;
        return valor_bono
    }else
    return valor_bono = 0;
}

