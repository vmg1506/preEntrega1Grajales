
class coordinador {
    constructor(ventas){
        this.nombre = "";
        this.ventas = ventas;
    }
}

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


let asesor1 = new asesor(), sumatoria = [], info = [], max = [];
arreglo = [];


document.getElementById('submit').onclick = function() {

let meta = [];
meta[1] = parseInt(prompt("Ingrese el valor actual de la meta"));
document.getElementById("meta").innerHTML = meta[1];
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);


document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "ASESOR";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "COMPAÑIA";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "VENTA";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "COMISION";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "PROPINA";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "BONO";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
thead.appendChild(row_1);



for(let i = 1; i <= 3 ; i++){
        let row_2 = document.createElement("tr");
        let row_2_data_1 = document.createElement("td");
        arreglo[0] = asesor1.get_nombre();
        row_2_data_1.innerHTML = arreglo[0];
        let row_2_data_2 = document.createElement("td");
        arreglo[1] = asesor1.get_empresa();
        row_2_data_2.innerHTML = arreglo[1];
        let row_2_data_3 = document.createElement("td");
        arreglo[2] = asesor1.get_venta();
        row_2_data_3.innerHTML = arreglo[2];
        let row_2_data_4 = document.createElement("td");
        arreglo[3] = asesor1.comision_venta();
        row_2_data_4.innerHTML = arreglo[3];
        let row_2_data_5 = document.createElement("td");
        arreglo[4] = asesor1.calular_propina();
        row_2_data_5.innerHTML = arreglo[4];
        let row_2_data_6 = document.createElement("td");
        arreglo[5] = asesor1.vale();
        row_2_data_6.innerHTML = arreglo[5];

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_6);
        tbody.appendChild(row_2);
        
        info[i] = {nombre: arreglo[0], empresa: arreglo[1], venta: arreglo[2], comision: arreglo[3], propina: arreglo[5], bono: arreglo[5]}
        sumatoria.push(arreglo[2]);
        


  }
  let total = 0;
  for(let j of sumatoria){
    total+=j;
  }

  
  meta.push(total);
  if(meta[2] >= meta[1]){
    console.log("la meta se cumplio y se obtuvo un valor superior de: ", meta[2] - meta[1]);
  }else{
    console.log("la meta no se cumplio por una difrencia de: ", meta[1] - meta[2]);
  }

  document.getElementById("totalizado").innerHTML = total;
 
  max = info.reduce((previous, current) => {
    return current.venta > previous.venta ? current : previous;
  });
  console.log(max);
  document.getElementById("nombre_asesor").innerHTML = max.nombre;
  document.getElementById("venta_asesor").innerHTML = max.venta;

  Swal.fire('El valor de la mayor venta es: ', (max.venta).toString());
  return max

  

} 
 
