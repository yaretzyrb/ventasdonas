function crearTiendas(contenedorID,min,cantidadTiendas){
    //Encontrar contenedor por su ID
    let elementoContenedor=document.getElementById(contenedorID);

    // Bucle para crear tiendas
    for(let conteoTiendas=1;conteoTiendas<=cantidadTiendas;conteoTiendas++){
        // Crear el texto de label para poder llamar a la función
        let textoEtiqueta="Tienda "+conteoTiendas;

        //Crear tiendas con la función crearParrafoTienda
        let parrafoTienda=crearParrafoTienda(textoEtiqueta,min);

        // Agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel,valorMin){
    // Crear etiquetas de párrafo
    let elementoParrafo = document.createElement("p");

    // Crear etiqueta Label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText=textoLabel+ ": ";
    
    // Agregar for a label
    elementoEtiqueta.setAttribute("for",textoLabel);
    
    //Crear input
    let elementoInput = document.createElement("input");
    
    //Agregar atributos input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);

    // Agregar label e input a p
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    // Devolver parrafo completo
    return elementoParrafo;
}


function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    
    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas]=valorVenta;
        posicionVentas = posicionVentas+1;
    }
    
    let totalVentas = sumarTotal(ventas);
    let mayor =calcularMayor(ventas);
    let menor = calcularMenor(ventas);
    
    for (let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className="menuNeutro";

        if(valorVenta==mayor){
            item.children[1].className="menuInputMayor";
        }
        if(valorVenta==menor){
            item.children[1].className="menuInputMenor";
        }

    }

    let mensajeSalida = "Total ventas: " +totalVentas;
                        // "/ Venta Mayor: " + mayor+
                        // "/ Venta Menor: " + menor;

    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array){
    let total =0;

    for(let venta of array){
        total = total +venta;
    }
    return total;
}

function calcularMayor(array){
    let max = array[0];

    for(let venta of array){
        if(venta>max){
            max = venta;
        }
    }
    return max;
}

function calcularMenor(array){
    let min = array[0];

    for(let venta of array){
        if(venta<min){
            min = venta;
        }
    }
    return min;
}