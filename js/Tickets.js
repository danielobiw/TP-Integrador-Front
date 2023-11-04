// ALGORITMO Y FUNCION PARA APLICAR DESCUENTO Y CONFIRMAR TOTAL DE COMPRA
function mostrarTotal() {
    event.preventDefault();
    const precio=200;
    var cantidad=document.getElementById("inputCant").value;
    var categoria=document.getElementById("categoria").value;
    var descuento;
    var nombreUsuario=document.getElementById("nombre").value;
    var apellidoUsuario=document.getElementById("apellido").value;
    var emailUsuario=document.getElementById("email").value;
    if (nombreUsuario=="") {
        alert("Ingrese el nombre de usuario");
    } else {
        if (apellidoUsuario=="") {
            alert("Ingrese el apellido de usuario");
        } else {
            if (emailUsuario=="") {
                alert("Ingrese el email de usuario");
            } else {
                if (cantidad==0) {
                    alert("Ingrese una cantidad");
                } else {
                    if (categoria=="Estudiante") {
                        descuento=0.8;
                    } else if (categoria=="Trainee") {
                        descuento=0.5;
                    } else if (categoria=="Junior") {
                        descuento=0.15;
                    } else {
                        descuento=0;
                    }
                    var totalPagar = (precio*cantidad)-(precio*cantidad*descuento);
                    console.log("PRECIO: $" + precio);
                    console.log("CANTIDAD: " + cantidad);
                    console.log("CATEGORIA: " + categoria);
                    console.log("DESCUENTO: " + descuento*100 + "%");
                    console.log("TOTAL A PAGAR: $" + totalPagar);
                    document.getElementById("valorPagar").innerHTML=totalPagar;
                }
            }
        }
    }    
}


// FUNCION PARA LIMPIAR CAMPOS DEL FORMULARIO Y RESULTADO
function clean() {
    var limpiar="";
    document.getElementById("valorPagar").innerHTML=limpiar;
}



// REFERENCIAS
// https://youtu.be/R0RWoE_qVOk


