/* =================================
   CREAR GIRASOLES
================================= */

const flores = document.querySelectorAll(".flor");

flores.forEach((flor) => {

    /* Crear pétalos */
    const cantidadPetalos = 16;

    for (let i = 0; i < cantidadPetalos; i++) {

        const petalo = document.createElement("div");

        petalo.classList.add("petalo");

        const angulo = (360 / cantidadPetalos) * i;

        petalo.style.transform =
            `translateX(-50%) rotate(${angulo}deg)`;

        flor.appendChild(petalo);
    }


    /* Crear centro */
    const centro = document.createElement("div");

    centro.classList.add("centro");

    flor.appendChild(centro);
});



/* =================================
   MÚSICA
================================= */

const cancion = document.getElementById("cancion");
const botonMusica = document.getElementById("botonMusica");

const progreso = document.getElementById("progreso");

const actual = document.getElementById("actual");
const duracion = document.getElementById("duracion");


/* Botón reproducir */

botonMusica.addEventListener("click", () => {

    if (cancion.paused) {

        cancion.play();

        botonMusica.textContent = "❚❚";

    } else {

        cancion.pause();

        botonMusica.textContent = "▶";
    }

});


/* Duración */

cancion.addEventListener("loadedmetadata", () => {

    duracion.textContent =
        convertirTiempo(cancion.duration);

});


/* Progreso */

cancion.addEventListener("timeupdate", () => {

    if (!cancion.duration) return;

    const porcentaje =
        (cancion.currentTime / cancion.duration) * 100;

    progreso.style.width = porcentaje + "%";

    actual.textContent =
        convertirTiempo(cancion.currentTime);

});


/* Cuando termina */

cancion.addEventListener("ended", () => {

    botonMusica.textContent = "▶";

    progreso.style.width = "0%";

    actual.textContent = "0:00";

});


/* Convertir segundos a minutos */

function convertirTiempo(segundos) {

    if (isNaN(segundos)) {
        return "0:00";
    }

    const minutos =
        Math.floor(segundos / 60);

    const segundosRestantes =
        Math.floor(segundos % 60);

    return minutos + ":" +
        segundosRestantes
            .toString()
            .padStart(2, "0");
}