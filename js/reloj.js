// Arreglo de días
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

// Arreglo de meses
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const tiempoActual = document.getElementById("time");
const fechaActual = document.getElementById("date"); 

function actualizarHoraYFecha() {
    // Instanciamos un objeto de tipo Date
    const ahora = new Date();

    // Obtenemos la hora actual
    const hora = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    // Obtenemos la fecha actual
    const dia = dias[ahora.getDay()];
    const fecha = ahora.getDate().toString().padStart(2, "0");
    const mes = meses[ahora.getMonth()];
    const anio = ahora.getFullYear().toString();

    // Actualizamos la fecha
    fechaActual.textContent = `${dia}, ${fecha} de ${mes} de ${anio}`;

    // Actualizamos la hora
    tiempoActual.textContent = `${hora} : ${minutos} : ${segundos}`;
}

// Actualizamos cada segundo
setInterval(actualizarHoraYFecha, 1000);