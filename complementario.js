let Membresía = 24000;

function formaDePago(Membresía){
    let pagoEnCuotas = Membresia/12;
    let descuentoContado = Membresía * 0.2;
    let codigoDescuento = CreaTuMundo;
}
let pregunta1 = prompt("Desea pagar su membresía? (Responda con SI o NO)");

if (pregunta1 === "SI") {
    let pregunta2 = prompt("Perfecto, ahora digite '1' para pagar de contado, o '2' para pagar en cuotas.");
    if (pregunta2 === "1") {
         let pregunta3 = prompt("¿Tiene algun codigo de descuento? De ser asi ingreselo.")
        if (pregunta3 === "CreaTuMundo") {
            console.log(descuentoContado(Membresía));
        } else {
            alert("Tu codigo es invalido.")
        }
    } else if (pregunta2 === "2") {
        console.log(Membresía);
        if (pregunta2 === "2") {
            let pregunta3 = prompt("¿Tiene algun codigo de descuento? De ser asi ingreselo.")
            if (pregunta3 === "CreaTuMundo") {
                console.log(descuentoContado(Membresía));
            } else {
                alert("Tu codigo es invalido.")
            }
        }
    } else {
        console.log("No entendi tu respuesta :(")
    }
} else if (pregunta1 === "NO" || preguntaInicial === "") {
    alert("No hay problema, te esperamos en otro momento :)")
}