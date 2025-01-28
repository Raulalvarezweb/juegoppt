// TRAEMOS LOS DATOS DEL HTML

// Declaramos las opciones globalmente para que estén disponibles en todas las funciones
const opciones = ['piedra', 'papel', 'tijera'];
let puntosjugador = 0;
let puntosia = 0;

// Evento para mostrar la pantalla de inicio al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const pantallaJuego = document.getElementById('pantalla-juego');
    const botonComenzar = document.getElementById('comenzar-juego');
    const botonReiniciar = document.getElementById('reiniciar'); // Mover la declaración aquí

    // Configuración inicial
    pantallaJuego.style.display = 'none';

    // Mostrar el juego al hacer clic en "Comenzar Juego"
    botonComenzar.addEventListener('click', () => {
        pantallaInicio.style.display = 'none'; // Ocultar la pantalla de inicio
        pantallaJuego.style.display = 'block'; // Mostrar la pantalla del juego
    });

    // Evento para reiniciar el juego
    botonReiniciar.addEventListener('click', reiniciar);

    // Configuración de los botones y creamos la constante con las opciones del juego
    const botones = document.querySelectorAll('#choices button');

    // Recorrer los botones y agregar los eventos de clic
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const eleccionUsuario = boton.getAttribute('data-choice');
            jugar(eleccionUsuario);
        });
    });
});

// Función juego
function jugar(eleccionUsuario) {
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    // Mostrar las elecciones con imágenes
    const imgUsuario = document.getElementById('img-usuario');
    const imgComputadora = document.getElementById('img-computadora');

    // Actualizamos las imágenes de las elecciones
    imgUsuario.src = `assets/${eleccionUsuario}.png`;
    imgUsuario.alt = `Tu elección: ${eleccionUsuario}`;
    imgComputadora.src = `assets/${eleccionComputadora}.png`;
    imgComputadora.alt = `Elección de la IA: ${eleccionComputadora}`;

    // Determinar el resultado
    let resultado;
    if (eleccionUsuario === eleccionComputadora) {
        resultado = "es un empate"; // Es un empate
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra')
    ) {
        resultado = "!Ganaste!"; // El usuario gana
        puntosjugador++; // Incrementa el puntaje del jugador
    } else {
        resultado = "!Perdiste!"; // La computadora gana
        puntosia++; // Incrementa el puntaje del jugador
    }

    // Actualiza la tabla de puntos
    document.getElementById('jugador-puntaje').textContent = puntosjugador;
    document.getElementById('computadora-puntaje').textContent = puntosia;

    // Mostrar el mensaje final
    const mensaje = `Elegiste ${eleccionUsuario}, la IA eligió ${eleccionComputadora}. ${resultado}`;
    document.getElementById('message').textContent = mensaje;
}

// Función para reiniciar el juego
function reiniciar() {
    console.log('Reiniciando el juego...'); // Depuración

    // Restablecer los puntos
    puntosjugador = 0;
    puntosia = 0;

    // Actualizar la tabla de puntos
    document.getElementById('jugador-puntaje').textContent = puntosjugador;
    document.getElementById('computadora-puntaje').textContent = puntosia;

    // Limpiar las imágenes de las elecciones
    const imgUsuario = document.getElementById('img-usuario');
    const imgComputadora = document.getElementById('img-computadora');
    imgComputadora.src = ''; // Limpiar la imagen de la IA
    imgComputadora.alt = ''; // Limpiar el texto alternativo de la IA
    imgUsuario.src = ''; // Limpiar la imagen del usuario
    imgUsuario.alt = ''; // Limpiar el texto alternativo del usuario

    // Restablecer el mensaje de resultado
    document.getElementById('message').textContent = 'Elige una opción para jugar.';

    console.log('Juego reiniciado correctamente.'); // Depuración
}
