
const agregarFila = () => {
    document.getElementById('tablaprueba').insertRow(-1).innerHTML = '<td id="nombre"></td><td id="empresa"></td><td id="venta"></td><td></td><td></td><td></td>'
  }
  
  const eliminarFila = () => {
    const table = document.getElementById('tablaprueba')
    const rowCount = table.rows.length
    
    if (rowCount <= 1)
      alert('No se puede eliminar el encabezado')
    else
      table.deleteRow(rowCount -1)
  }


function obtener() {
document.getElementById('tablaprueba').insertRow(-1).innerHTML = '<td id="nombre"></td><td id="empresa"></td><td id="venta"></td><td></td><td></td><td></td>'
let prueba = document.getElementById("name").value;
document.getElementById("nombre").innerHTML = prueba;
let prueba1 = document.getElementById("company").value;
document.getElementById("empresa").innerHTML = prueba1;
let prueba2 = document.getElementById("sale").value;
document.getElementById("venta").innerHTML = prueba2;

}

let btn = document.getElementById("btn");
btn.addEventListener("click", obtener);


