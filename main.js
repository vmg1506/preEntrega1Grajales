let arr = [];

document.querySelector("input[type=submit]").addEventListener("click",function(e){
    
    e.preventDefault();
 
    let nombre=document.querySelector("input[name=nombre]");
    //SE OBTIENEN VALORES DEL SELECT
    let lista = document.getElementById("opciones");
    let indiceSeleccionado = lista.selectedIndex;
    let opcionSeleccionada = lista.options[indiceSeleccionado];
    let textoSeleccionado = opcionSeleccionada.text;
    let valorSeleccionado = opcionSeleccionada.value;
    console.log(textoSeleccionado);
    
    let venta = document.querySelector("input[name=sale]");
    console.log(parseInt(venta.value));
    let bono = calcular_bono(venta.value);
    console.log(bono);
    let comision = {valor1:venta.value * 0.05, valor2:venta.value * 0.02};
    arr.push(parseInt(venta.value));
    let total = 0;
    for(let i of arr){
      total+=i;
    }
    console.log(arr);
    console.log(total);
    document.getElementById("totalizado").innerHTML = total;

    
    // Muestra error si los valores de nombre y venta estan vacios
    if (!nombre.value) {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");

    if(isNaN(parseInt(venta.value)) || parseInt(venta.value)<=0){
        venta.classList.add("error");
        return;
    }
    venta.classList.remove("erorr");
    
    agregarFila(nombre.value, opcionSeleccionada.value, venta.value, comision.valor1, comision.valor2, bono);
    
 
    //limpiamos los valores del input
    venta.value = "";
    textoSeleccionado.value="";
    nombre.value="";
    nombre.focus();
 
});
 

function agregarFila(nombre, opcion, venta, valor1, valor2, bono) {
    
    const tr=document.createElement("tr");
 
    const tdNombre=document.createElement("td");
    let txt=document.createTextNode(nombre);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";
 
    const tdOpcion=document.createElement("td");
    txt=document.createTextNode(opcion);
    tdOpcion.appendChild(txt);
    tdOpcion.className="left";

    let tdventa = document.createElement("td");
    txt = document.createTextNode(venta);
    tdventa.appendChild(txt);
    tdventa.className = "rigth";

    let tdcomsion = document.createElement("td");
    txt = document.createTextNode(valor1);
    tdcomsion.appendChild(txt);
    tdcomsion.className = "commision"

    let tdpropina = document.createElement("td");
    txt = document.createTextNode(valor2);
    tdpropina.appendChild(txt);
    tdpropina.className = "propina"

    let tdBono = document.createElement("td");
    txt = document.createTextNode(bono);
    tdBono.appendChild(txt);
    tdBono.className = "bono"
    
 
    
 
    tr.appendChild(tdNombre);
    tr.appendChild(tdOpcion);
    tr.appendChild(tdventa);
    tr.appendChild(tdcomsion);
    tr.appendChild(tdpropina);
    tr.appendChild(tdBono);
    
 
    const tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);
 
   
    document.getElementById("listado").classList.remove("hide");
}

  function calcular_bono(venta){
    if(venta < 15000){
      let bono = 0;
      return vale
     } else if (venta >= 15000 && venta <= 25000){
      let vale = 500
      return vale
    }else if(venta > 25000 && venta <= 35000){
      let vale = 750  
      return vale
    } else if(venta >35000){
      let vale = 1000
      return vale
    }
  }
 

 
/**
 * @param string nombre
 * @param string edad
 */
function agregarInput(nombre, edad) {
    const input=document.createElement("input");
    input.type="hidden";
    input.name="nombres[]";
    input.value=nombre+"-"+edad;
 
    document.querySelector("form").appendChild(input);
}