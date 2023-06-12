
let arr = [];
// Evento que se ejecuta al pulsar el botón agregar
document.querySelector("input[type=submit]").addEventListener("click",function(e){
    // cancelamos el evento
    e.preventDefault();
 
    let nombre=document.querySelector("input[name=nombre]");
    let edad=document.querySelector("input[name=edad]");
    let venta = document.querySelector("input[name=sale]");
    let comision = {valor1:venta.value * 0.05, valor2:venta.value * 0.02};
    let propina = venta.value * 0.02;
    arr.push(comision);
    console.log(comision);
    
    // mostramos un error si no ha recibido el nombre
    if (!nombre.value) {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
 
    // mostramos un error si no ha recibido una edad
    if (isNaN(parseInt(edad.value)) || parseInt(edad.value)<=0) {
        edad.classList.add("error");
        return;
    }
    edad.classList.remove("error");

    if(isNaN(parseInt(venta.value)) || parseInt(venta.value)<=0){
        venta.classList.add("error");
        return;
    }
    venta.classList.remove("erorr");
    
    agregarFila(nombre.value, edad.value, venta.value, comision.valor1);
    agregarInput(nombre.value, edad.value, venta.value);
 
    //limpiamos los valores del input
    venta.value = "";
    edad.value="";
    nombre.value="";
    nombre.focus();
 
});
 
// Evento que se ejecuta cuando se pulsa sobre el botón enviar
document.querySelector(".enviar").addEventListener("click", function(e) {
    this.closest("form").submit();
})
 
/**
 * Funcion para añadir el nombre y la edad en la tabla
 *
 * @param string nombre
 * @param string edad
 */
function agregarFila(nombre, edad, venta, comision) {
    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    const tr=document.createElement("tr");
 
    const tdNombre=document.createElement("td");
    let txt=document.createTextNode(nombre);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";
 
    const tdEdad=document.createElement("td");
    txt=document.createTextNode(edad);
    tdEdad.appendChild(txt);
    tdEdad.className="left";

    let tdventa = document.createElement("td");
    txt = document.createTextNode(venta);
    tdventa.appendChild(txt);
    tdventa.className = "rigth";

    let tdcomsion = document.createElement("td");
    txt = document.createTextNode(comision);
    tdcomsion.appendChild(txt);
    tdcomsion.className = "commision"
 
    const tdRemove=document.createElement("td");
    const buttonRemove=document.createElement("img");
    buttonRemove.src="garbage.png";
    buttonRemove.onclick=eliminarFila;
    tdRemove.appendChild(buttonRemove);
 
    tr.appendChild(tdNombre);
    tr.appendChild(tdEdad);
    tr.appendChild(tdventa);
    tr.appendChild(tdcomsion);
    tr.appendChild(tdRemove);
 
    const tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);
 
    // eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno
    document.getElementById("listado").classList.remove("hide");
}
 
/**
 * Funcion para eliminar el usuario de la tabla y llamar a la funcion
 * para eliminar al usuario del input oculto
 */
function eliminarFila(e) {
    const tr=this.closest("tr")
    const nombre=tr.querySelector(".nombre").innerText;
    const edad=tr.querySelector(".left").innerText;
    const venta = tr.querySelector(".right").innerText;
 
    eliminarInput(nombre, edad, venta);
    tr.remove();
 
    // Si no hay ningun elemento en la lista, escondemos la tabla
    if (document.getElementById("listado").querySelector("tbody").querySelectorAll("tr").length==0) {
        document.getElementById("listado").classList.add("hide");
    }
}
 
/**
 * Funcion para crear un input oculto para cuando se envie el formulario
 * El nombre del input es un array de valores denominado "nombres" que
 * contiene el nombre del alumno separado por un guion medio:
 *      juan-22
 *      manuel-19
 *
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
 
/**
 * Funcion para eliminar el input oculto
 *
 * @param string nombre
 * @param string edad
 */
function eliminarInput(nombre, edad) {
    const input=document.querySelector("input[type=hidden][value="+nombre+"-"+edad+"]");
    input.remove();
}












