


class asesor {
    constructor(){
        this.nombre = ""
        this.empresa = ""
        this.venta = 0;
        this.comision = 0;
        this.fee = 0;
        this.bono = 0;

    }

    get_nombre() {
        this.nombre = prompt("Ingrese el nombre del asesor: ");
        console.log("El nombre del asesor es: ", this.nombre);
        return this.nombre
    }

    get_empresa(){
        this.empresa = prompt("Ingrese empresa A, B o C");
        this.empresa = this.empresa.toUpperCase();
        this.empresa = this.company(this.empresa);
        console.log("empresa: ", this.empresa);
        
        return this.empresa
    }

    get_venta(){
        this.venta = prompt("Ingrese el valor de la venta");
        this.venta = this.comprobar_mumero(this.venta);
        console.log("Ingrese el valor de la venta: ", this.venta);
        return this.venta

    }
        
    

    comprobar_mumero (valor) {
        while (true) {
            
            if(!isNaN(valor) && valor != null && valor != ""){
                if(this.empresa == "" || this.empresa =="A" || this.empresa == "B" || this.empresa == "C"){
                    return parseInt(valor);
                }else {
                    return parseInt(valor = 0)
                }
                
            break
            } else{
                alert("INGRESAR SOLO VALORES NUMERICOS");
                valor = prompt("Ingrese el valor de la venta");
            }
        }
        return parseInt(valor)
    }

    company(empresa) {
        if (empresa == "") {
            return "N/A"
        }else if (empresa == "A" || empresa == "B" || empresa == "C"){
            return empresa
        }else {
            return "N/A"
        }
    }

    prueba_venta() {
        if (this.nombre == "" || this.nombre =="A" || this.nombre == "B" || this.nombre == "C") {
            return this.venta
        }else {
            return "N/A", this.venta = 0
        
        }
    }

    retribucion(){
        this.comision = this.venta *0.05;
        console.log("La comision obtenida es de: ", this.comision);
    }

    calular_propina () {
        if (this.empresa == "") {
            return "N/A"
        }else if(this.empresa == "" || this.empresa =="A" || this.empresa == "B" || this.empresa == "C"){
            let fee = 0.02;
            this.fee = this.venta * fee;
            return this.fee
        }else {
            return "N/A"
        }
        
       
    }

    comision_venta() {
        if (this.empresa == "A") {
            let descuento = 0.05;
            this.comision = this.venta * descuento;
            return this.comision
        } else if (this.empresa == "B"){
             let descuento = 0.04;
             this.comision = this.venta * descuento;
             return this.comision
        }else if (this.empresa == "C") {
            let descuento = 0.06;
            this.comision = this.venta * descuento;
            return this.comision
        } else {
            return "VENTA NULA"
        }
    
    }

    vale(){
        if(this.venta <15000 && this.empresa != null){
            this.venta=0;
            return this.venta
        }else if((this.venta >=15000 && this.venta <= 25000) && this.empresa != null) {
            this.venta = 500;
            return this.venta;
        } else if((this.venta > 25000 && this.venta <=35000) && this.empresa != null) {
            this.venta = 750;
            return this.venta
        }else if(this.venta > 35000 && this.empresa != null){
            this.venta = 1000;
            return this.venta
        }else
        return this.venta = 0;
     }
    
}


let asesor1 = new asesor();
arreglo = [];



        arreglo[0] = asesor1.get_nombre();
        document.getElementById("name").innerHTML = arreglo[0]
        arreglo[1] = asesor1.get_empresa();
        document.getElementById("company").innerHTML = arreglo[1]
        arreglo[2] = asesor1.get_venta();
        document.getElementById("sale").innerHTML = arreglo[2]
        arreglo[3] = asesor1.comision_venta();
        document.getElementById("comition").innerHTML = arreglo[3]
        arreglo[4] = asesor1.calular_propina();
        document.getElementById("fee").innerHTML = arreglo[4]
        arreglo[5] = asesor1.vale();
        document.getElementById("bono").innerHTML = arreglo[5]

        console.log(arreglo);




