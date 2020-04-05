var personas = [];
// var input_search = 
var arrayNombre = [];
var hasFilter = false;
//--------------------------------------------------------------------------------------------

function queTiempo (tiempo, fn) {
    setTimeout (() => {
        fn();
    }, tiempo);
}

//--------------------------------------------------------------------------------------------
/*** alterna la lista actualizada contra la lista original. */
function handleOnAlternarLista() {
    
    queTiempo (5000, function() {

        if(hasFilter){
            recargarLista(personas);
            hasFilter = false;

        }else {
            recargarLista(arrayNombre);
            hasFilter = true;
        }
        alert('se actulizo');
    })
}
//--------------------------------------------------------------------------------------------
/**
 * muestra la cantidad de personas que estan en la lista
 */
function handleOnCantidadPersonas() {
    if (hasFilter){
        return alert(`Cantidad personas ${arrayNombre.length}`)
    }
    else{
        return alert(`Cantidad personas ${personas.length}`)
    }
    // let bodyTable = document.getElementsByTagName('tbody')[0].childElementCount;
    // // alert('La cantidad de personas es: ' + personas.length);
    // alert(`La cantidad de personas es: ${bodyTable}`)
}
//implementar esta accion para que muestre en un alert la cantidad de personas mostradas en la lista

//--------------------------------------------------------------------------------------------
/**
 * elimina la primera persona de la lista
 */
//Hacer funcionalidad para eliminar la primera persona de la lista.
function handleOnEliminarPrimero() {
    console.log(hasFilter);

    if(hasFilter) {
        arrayNombre.shift();
        recargarLista(arrayNombre)
                      
    } else { 
        personas.shift();
        recargarLista(personas);
    }
}

//1) obtener posicion del 1er elem del array
//2) borrarlo

//--------------------------------------------------------------------------------------------
/**
 * elimina la ultima persona de la lista.
 */
function handleOnEliminarUltimo() {
    if(hasFilter) {
    arrayNombre.pop();
    recargarLista(arrayNombre)
           
    } else { 
        personas.pop();
        recargarLista(personas);
    }
}
//     alert("Hacer funcionalidad para eliminar la ultima persona de la lista.");
// }

//--------------------------------------------------------------------------------------------
/**
 * del total de personas cargadas, filtra las que no coinciden con el criterio de busqueda.
 * @param {string} nombre 
 */
function handleOnBuscarPorNombre() {
       
    hasFilter = true;
    let nombreSearch = document.getElementById('busquedaNombre').value;
    localStorage.setItem('nombreFiltrado', nombre);
    
    arrayNombre = personas.filter(function(elem){
        return elem.nombre.toLowerCase().includes(nombreSearch.toLowerCase().trim())
    });

    if(arrayNombre.length > 0){
        recargarLista(arrayNombre);
    }
    else{
        alert("El nombre ingresado no se encuentra en la lista");
    }
    
}
    //  recargarLista(arrayNombre);
    // for ( let i=0; i<personas.length; i++) {

    //     if (personas[i].nombre.toLowerCase().includes(nombre.toLowerCase().trim())) {
    //         arrayNombre.push(personas[i]);
    //     }else{
    //         alert("El nombre ingresado no se encuentra en la lista");
    //     }
    // }
    


    // alert("Hacer funcionalidad para filtrar las personas que no coincidan con el criterio de busqueda.");

//--------------------------------------------------------------------------------------------
/**
 * limpia la busqueda de persona.
 */
function handleOnLimpiarBusquedaPersona() {

    nombreSearch = '';
    hasFilter = false;
    return onCargarPersonas();       
      
}
// alert("Hacer funcionalidad para limpiar el criterio de busqueda y recargar la lista completa.");

//--------------------------------------------------------------------------------------------
/*** indica que persona hay que eliminar  * pasando por parametro el id.
 * @param {number} idPersona 
 */
function handleOnEliminarPersona(id) {

    let validar = confirm ('Estas seguro que deseas borrar el id - ' + id);
    if (validar && !hasFilter) {
        let index = personas.findIndex(elem => elem.id == id);
        personas.splice(index,1);
        recargarLista(personas)
    }
    else {
        let index = arrayNombre.findIndex(elem => elem.id == id);
        arrayNombre.splice(index,1);
        recargarLista(arrayNombre)
    }
    
}
    
//     alert(`hacer la funcionalidad necesaria para eliminar la persona con id ${id}`);
    
// }

//--------------------------------------------------------------------------------------------
/** * evento para actualizar el nombre de una persona * pasando por parametro el id.
 * @param {number} idPersona 
 */
function handleOnActualizarNombrePersona(id) {

    
    alert(`Hacer la funcionalidad necesaria para actualizar el nombre de la persona con id ${id}`);
    
}

//--------------------------------------------------------------------------------------------
/** * Recibe un array de personas y lo  * agrega a la lista de la pantalla.
 * @param {Array} personas 
 */
function recargarLista(personas) {
    
    // creacion de tabla y registro
    var table = document.getElementById("tablePersonas");
    var tbody = table.getElementsByTagName("tbody")[0];

    var tbodyNew = document.createElement('tbody');

    for(var i = 0; i < personas.length; i++) {

        var tr = tbodyNew.insertRow(i);

        // celda
        var tdId = tr.insertCell(0);
        tdId.className = "text-center";
        tdId.innerText = personas[i].id;

        // celda
        var tdNombre = tr.insertCell(1);
        tdNombre.className = "text-center";
        tdNombre.innerText = personas[i].nombre;

        // celda
        var tdApellido = tr.insertCell(2);
        tdApellido.innerText = personas[i].apellido;
        tdApellido.className = "text-center";

        // celda
        var tdEdad = tr.insertCell(3);
        tdEdad.innerText = personas[i].edad;
        tdEdad.className = "text-center";

        // boton de accion
        var button = document.createElement("button");
        button.className = "btn btn-primary btn-sm mr-1";
        button.type = "button";
        button.setAttribute( "onClick", `handleOnEliminarPersona('${personas[i].id}')`);
        button.innerText = "Eliminar";

        var button2 = document.createElement("button");
        button2.className = "btn btn-primary btn-sm mr-1";
        button2.type = "button";
        button2.setAttribute( "onClick", `handleOnActualizarNombrePersona('${personas[i].id}')`);
        button2.innerText = "Actualizar Nombre";

        // celda
        var tdAccion = tr.insertCell(4);
        tdAccion.className = "text-center";
        tdAccion.appendChild(button);
        tdAccion.appendChild(button2);
    }

    table.replaceChild(tbodyNew, tbody);
    // callback();
}

//--------------------------------------------------------------------------------------------
/*** function que carga personas */
function onCargarPersonas() {
    
    var persona1 = {
        id: 4,
        nombre: "Gabriel",
        apellido: "Martinez",
        edad: 20
    };
    
    var persona2 = {
        id: 55,
        nombre: "Martin",
        apellido: "Tolosa",
        edad: 25
    };
    
    var persona3 = {
        id: 57,
        nombre: "Marcelo",
        apellido: "Alvarez",
        edad: 37
    };
    
    var persona4 = {
        id: 8,
        nombre: "Florencia",
        apellido: "Guzman",
        edad: 30
    };
    
    var persona5 = {
        id: 9,
        nombre: "Julieta",
        apellido: "Garcia",
        edad: 33
    };
    
    var persona6 = {
        id: 12,
        nombre: "Mariela",
        apellido: "Santini",
        edad: 40
    };

    personas = [persona1, persona2, persona3, persona4, persona5, persona6];

    recargarLista(personas);
    

    
    let nombreLocalStorage = localStorage.getItem ('nombreFiltrado');

    if(nombreLocalStorage){
    document.getElementById('busquedaNombre').value = nombreLocalStorage;
    }
}

onCargarPersonas();
 
