// =========================================
// PAUSA5 V4 — PROFESIONAL
// =========================================

const MODO_PRUEBA = false;

const DURACION_EJERCICIO =
    MODO_PRUEBA
        ? 5
        : 60;


// WhatsApp de contacto

const NUMERO_WHATSAPP = "56932594691";



const estados = {


    estresado: {

        emoji:
            "😫",

        titulo:
            "Estoy estresado",

        nombreRutina:
            "Pausa suave",

        mensaje:
            "Una rutina tranquila con respiración, movilidad y movimientos suaves.",

        ejercicios: [

            {
                nombre: "Respiración profunda",
                emoji: "🌬️",
                descripcion: "Respira lentamente. Inhala de forma cómoda y exhala sin apurarte."
            },

            {
                nombre: "Movilidad de hombros",
                emoji: "🙆",
                descripcion: "Realiza círculos suaves con los hombros hacia adelante y hacia atrás."
            },

            {
                nombre: "Estiramiento de brazos",
                emoji: "🙌",
                descripcion: "Extiende suavemente los brazos y cambia de posición sin forzar."
            },

            {
                nombre: "Movilidad de espalda",
                emoji: "🧍",
                descripcion: "Mueve suavemente el torso y cambia de postura de manera controlada."
            },

            {
                nombre: "Respiración y relajación",
                emoji: "🧘",
                descripcion: "Termina respirando lentamente y relajando hombros y brazos."
            }

        ]

    },



    cansado: {

        emoji:
            "🥱",

        titulo:
            "Estoy cansado",

        nombreRutina:
            "Pausa de activación",

        mensaje:
            "Una activación progresiva para comenzar a mover el cuerpo poco a poco.",

        ejercicios: [

            {
                nombre: "Marcha suave",
                emoji: "🚶",
                descripcion: "Comienza caminando suavemente en el lugar y mueve los brazos."
            },

            {
                nombre: "Movilidad de brazos",
                emoji: "🙆",
                descripcion: "Mueve los brazos suavemente hacia adelante, atrás y a los lados."
            },

            {
                nombre: "Elevación de rodillas",
                emoji: "🦵",
                descripcion: "Alterna las rodillas manteniendo un ritmo cómodo."
            },

            {
                nombre: "Sentadillas suaves",
                emoji: "🏋️",
                descripcion: "Realiza sentadillas controladas sin apurarte y sin forzar el movimiento."
            },

            {
                nombre: "Estiramiento final",
                emoji: "🧘",
                descripcion: "Estira suavemente brazos, espalda y piernas antes de terminar."
            }

        ]

    },



    energia: {

        emoji:
            "😊",

        titulo:
            "Tengo energía",

        nombreRutina:
            "Pausa dinámica",

        mensaje:
            "Una Pausa5 más dinámica para aprovechar tus ganas de moverte.",

        ejercicios: [

            {
                nombre: "Marcha rápida",
                emoji: "🏃",
                descripcion: "Marcha en el lugar a un ritmo un poco más activo, siempre a tu comodidad."
            },

            {
                nombre: "Sentadillas",
                emoji: "🏋️",
                descripcion: "Realiza sentadillas de forma controlada manteniendo una postura cómoda."
            },

            {
                nombre: "Rodillas arriba",
                emoji: "🦵",
                descripcion: "Alterna las rodillas y acompaña el movimiento con los brazos."
            },

            {
                nombre: "Movimiento de brazos",
                emoji: "🙌",
                descripcion: "Mueve los brazos de manera dinámica manteniendo un ritmo que puedas controlar."
            },

            {
                nombre: "Recuperación y respiración",
                emoji: "🌬️",
                descripcion: "Baja progresivamente el ritmo y termina respirando tranquilamente."
            }

        ]

    },



    saturado: {

        emoji:
            "😵‍💫",

        titulo:
            "Saturado de estudiar",

        nombreRutina:
            "Pausa de escritorio",

        mensaje:
            "Una rutina para levantarte del escritorio, moverte y cambiar de actividad.",

        ejercicios: [

            {
                nombre: "Movilidad de cuello",
                emoji: "🙂",
                descripcion: "Mueve el cuello suavemente de lado a lado, sin realizar movimientos bruscos."
            },

            {
                nombre: "Movilidad de hombros",
                emoji: "🙆",
                descripcion: "Realiza círculos suaves con los hombros y deja descansar los brazos."
            },

            {
                nombre: "Movilidad de espalda",
                emoji: "🧍",
                descripcion: "Cambia de postura y moviliza suavemente la espalda y el torso."
            },

            {
                nombre: "Marcha en el lugar",
                emoji: "🚶",
                descripcion: "Levántate del escritorio y marcha suavemente durante un minuto."
            },

            {
                nombre: "Respiración final",
                emoji: "🧘",
                descripcion: "Termina la pausa respirando lentamente antes de volver a estudiar."
            }

        ]

    },



    bien: {

        emoji:
            "🙂",

        titulo:
            "Estoy bien",

        nombreRutina:
            "Pausa5 clásica",

        mensaje:
            "La rutina clásica de Pausa5 con movimientos variados.",

        ejercicios: [

            {
                nombre: "Marcha en el lugar",
                emoji: "🚶",
                descripcion: "Mueve suavemente brazos y piernas para comenzar a activar tu cuerpo."
            },

            {
                nombre: "Sentadillas suaves",
                emoji: "🏋️",
                descripcion: "Realiza sentadillas controladas manteniendo un ritmo cómodo."
            },

            {
                nombre: "Movilidad de hombros",
                emoji: "🙆",
                descripcion: "Realiza círculos suaves con los hombros y mueve lentamente los brazos."
            },

            {
                nombre: "Elevación de rodillas",
                emoji: "🦵",
                descripcion: "Alterna las rodillas manteniendo un ritmo que resulte cómodo para ti."
            },

            {
                nombre: "Estiramiento y respiración",
                emoji: "🧘",
                descripcion: "Estira suavemente el cuerpo y termina respirando tranquilamente."
            }

        ]

    }

};



const frases = [

    "Cinco minutos también cuentan.",

    "Una pausa pequeña puede cambiar tu ritmo.",

    "No necesitas hacerlo perfecto, solo empezar.",

    "Muévete cinco minutos y continúa a tu ritmo.",

    "Tu descanso también forma parte del estudio.",

    "Haz una pausa. Después puedes continuar.",

    "Cinco minutos para ti también importan."

];



const LOGROS = [

    {
        icono: "🌱",
        nombre: "Primer paso",
        descripcion: "Completa tu primera Pausa5.",
        cumple: datos => datos.rutinas >= 1
    },

    {
        icono: "⭐",
        nombre: "Constancia",
        descripcion: "Completa 5 rutinas.",
        cumple: datos => datos.rutinas >= 5
    },

    {
        icono: "🔥",
        nombre: "Semana activa",
        descripcion: "Alcanza una racha de 7 días.",
        cumple: datos => datos.racha >= 7
    },

    {
        icono: "⏱️",
        nombre: "Una hora para ti",
        descripcion: "Acumula 60 minutos.",
        cumple: datos => datos.minutos >= 60
    },

    {
        icono: "🧭",
        nombre: "Explorador",
        descripcion: "Prueba las 5 rutinas adaptativas.",
        cumple:
            datos =>
                Object.keys(
                    datos.estadosUsados || {}
                ).length >= 5
    }

];



const $ =
    selector =>
        document.querySelector(
            selector
        );


const $$ =
    selector =>
        Array.from(
            document.querySelectorAll(
                selector
            )
        );



let estadoActual =
    null;


let rutinaActual =
    estados.bien.ejercicios;


let ejercicioActual =
    0;


let tiempoRestante =
    DURACION_EJERCICIO;


let estaPausado =
    false;


let rutinaAbierta =
    false;


let finalRegistrado =
    false;


let timerEjercicio =
    null;


let timerCountdown =
    null;


let timerCountdownFinal =
    null;


let timerTransicion =
    null;


let audioContext =
    null;


let deferredInstallPrompt =
    null;


let toastTimer =
    null;


let onboardingPaso =
    0;


let respuestaEstadoFinal =
    null;


let respuestaUtilFinal =
    null;



const RADIO =
    92;


const CIRCUNFERENCIA =
    2 * Math.PI * RADIO;



const preferencias = {

    sonido:
        true,

    vibracion:
        true,

    reducirMovimiento:
        false,

    recordarEstado:
        true

};



const panelRutina =
    $("#panelRutina");

const cerrarRutina =
    $("#cerrarRutina");

const vistaCountdown =
    $("#vistaCountdown");

const vistaEjercicio =
    $("#vistaEjercicio");

const vistaTransicion =
    $("#vistaTransicion");

const vistaCompletado =
    $("#vistaCompletado");

const countdown =
    $("#countdown");

const textoCountdown =
    $("#textoCountdown");

const progresoTexto =
    $("#progresoTexto");

const emojiRutina =
    $("#emojiRutina");

const nombreEjercicio =
    $("#nombreEjercicio");

const descripcionEjercicio =
    $("#descripcionEjercicio");

const temporizador =
    $("#temporizador");

const circuloProgreso =
    $("#circuloProgreso");

const puntosProgreso =
    $("#puntosProgreso");

const mensajeTiempo =
    $("#mensajeTiempo");

const botonAnterior =
    $("#botonAnterior");

const botonPausar =
    $("#botonPausar");

const botonSiguiente =
    $("#botonSiguiente");

const botonSonido =
    $("#botonSonido");

const siguienteNombre =
    $("#siguienteNombre");

const repetirRutina =
    $("#repetirRutina");

const cerrarFinal =
    $("#cerrarFinal");

const confeti =
    $("#confeti");


const botonTema =
    $("#botonTema");

const botonInstalar =
    $("#botonInstalar");

const botonPreferencias =
    $("#botonPreferencias");


const estadoSeleccionado =
    $("#estadoSeleccionado");

const estadoSeleccionadoEmoji =
    $("#estadoSeleccionadoEmoji");

const estadoSeleccionadoTitulo =
    $("#estadoSeleccionadoTitulo");

const estadoSeleccionadoTexto =
    $("#estadoSeleccionadoTexto");

const comenzarEstado =
    $("#comenzarEstado");

const cambiarEstado =
    $("#cambiarEstado");

const rutinaSeleccionadaTexto =
    $("#rutinaSeleccionadaTexto");


const rachaValor =
    $("#rachaValor");

const rutinasValor =
    $("#rutinasValor");

const minutosValor =
    $("#minutosValor");

const perfilRacha =
    $("#perfilRacha");

const perfilRutinas =
    $("#perfilRutinas");

const perfilMinutos =
    $("#perfilMinutos");

const perfilFavorita =
    $("#perfilFavorita");

const calendarioActividad =
    $("#calendarioActividad");

const listaLogros =
    $("#listaLogros");

const logrosContador =
    $("#logrosContador");


const resumeBanner =
    $("#resumeBanner");

const resumeTexto =
    $("#resumeTexto");

const reanudarRutina =
    $("#reanudarRutina");

const descartarRutina =
    $("#descartarRutina");


const onboarding =
    $("#onboarding");

const cerrarOnboarding =
    $("#cerrarOnboarding");

const onboardingSiguiente =
    $("#onboardingSiguiente");

const onboardingDots =
    $("#onboardingDots");


const panelPreferencias =
    $("#panelPreferencias");

const cerrarPreferencias =
    $("#cerrarPreferencias");

const preferenciaSonido =
    $("#preferenciaSonido");

const preferenciaVibracion =
    $("#preferenciaVibracion");

const preferenciaMovimiento =
    $("#preferenciaMovimiento");

const preferenciaRecordarEstado =
    $("#preferenciaRecordarEstado");

const reiniciarDatos =
    $("#reiniciarDatos");


const botonDudas =
    $("#botonDudas");

const cajaDudas =
    $("#cajaDudas");

const cerrarDudas =
    $("#cerrarDudas");

const abrirWhatsapp =
    $("#abrirWhatsapp");

const whatsappAviso =
    $("#whatsappAviso");


const feedbackGracias =
    $("#feedbackGracias");


const toast =
    $("#toast");


const splash =
    $("#splash");



// =========================================
// LOCAL STORAGE
// =========================================

function leerLocal(
    clave,
    fallback = null
) {

    try {

        const valor =
            localStorage.getItem(
                clave
            );


        return valor === null
            ? fallback
            : valor;

    }

    catch {

        return fallback;

    }

}



function guardarLocal(
    clave,
    valor
) {

    try {

        localStorage.setItem(
            clave,
            valor
        );

    }

    catch {

    }

}



function eliminarLocal(
    clave
) {

    try {

        localStorage.removeItem(
            clave
        );

    }

    catch {

    }

}



// =========================================
// INICIO
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarPreferencias();

        configurarTema();

        configurarBotonesInicio();

        configurarEstados();

        configurarRutina();

        configurarFeedbackFinal();

        configurarAyuda();

        configurarFAQ();

        configurarWhatsapp();

        configurarPreferencias();

        configurarOnboarding();

        configurarReanudacion();

        configurarPWA();

        configurarAnimaciones();

        cargarFraseDiaria();

        prepararCirculo();

        actualizarIconoSonido();

        actualizarTarjetasRutina(
            estados.bien.ejercicios
        );

        actualizarEstadisticas();

        revisarSesionGuardada();


        if (
            preferencias.recordarEstado
        ) {

            const ultimoEstado =
                leerLocal(
                    "pausa5UltimoEstado"
                );


            if (
                ultimoEstado &&
                estados[ultimoEstado]
            ) {

                seleccionarEstado(
                    ultimoEstado,
                    false
                );

            }

        }


        setTimeout(
            () => {

                splash.classList.add(
                    "hide"
                );

            },
            550
        );

    }
);



// =========================================
// PREFERENCIAS
// =========================================

function cargarPreferencias() {

    const raw =
        leerLocal(
            "pausa5Preferencias"
        );


    if (
        raw
    ) {

        try {

            Object.assign(
                preferencias,
                JSON.parse(raw)
            );

        }

        catch {

        }

    }


    aplicarPreferencias();

}



function guardarPreferencias() {

    guardarLocal(
        "pausa5Preferencias",
        JSON.stringify(
            preferencias
        )
    );


    aplicarPreferencias();

}



function aplicarPreferencias() {

    document.body.classList.toggle(
        "reduce-motion",
        preferencias.reducirMovimiento
    );


    if (
        preferenciaSonido
    ) {

        preferenciaSonido.checked =
            preferencias.sonido;

    }


    if (
        preferenciaVibracion
    ) {

        preferenciaVibracion.checked =
            preferencias.vibracion;

    }


    if (
        preferenciaMovimiento
    ) {

        preferenciaMovimiento.checked =
            preferencias.reducirMovimiento;

    }


    if (
        preferenciaRecordarEstado
    ) {

        preferenciaRecordarEstado.checked =
            preferencias.recordarEstado;

    }

}



function configurarPreferencias() {

    botonPreferencias.addEventListener(
        "click",
        () => {

            abrirOverlay(
                panelPreferencias
            );

        }
    );


    cerrarPreferencias.addEventListener(
        "click",
        () => {

            cerrarOverlay(
                panelPreferencias
            );

        }
    );


    [

        preferenciaSonido,

        preferenciaVibracion,

        preferenciaMovimiento,

        preferenciaRecordarEstado

    ].forEach(
        input => {

            input.addEventListener(
                "change",
                () => {

                    preferencias.sonido =
                        preferenciaSonido.checked;


                    preferencias.vibracion =
                        preferenciaVibracion.checked;


                    preferencias.reducirMovimiento =
                        preferenciaMovimiento.checked;


                    preferencias.recordarEstado =
                        preferenciaRecordarEstado.checked;


                    guardarPreferencias();

                    actualizarIconoSonido();

                }
            );

        }
    );


    reiniciarDatos.addEventListener(
        "click",
        () => {

            if (
                !window.confirm(
                    "¿Seguro que quieres borrar tus estadísticas, racha, calendario y logros?"
                )
            ) {

                return;

            }


            eliminarLocal(
                "pausa5Estadisticas"
            );


            eliminarLocal(
                "pausa5Sesion"
            );


            actualizarEstadisticas();

            revisarSesionGuardada();


            mostrarToast(
                "Tus estadísticas fueron reiniciadas."
            );

        }
    );

}



// =========================================
// ONBOARDING
// =========================================

function configurarOnboarding() {

    cerrarOnboarding.addEventListener(
        "click",
        finalizarOnboarding
    );


    onboardingSiguiente.addEventListener(
        "click",
        () => {

            const pasos =
                $$(".onboarding-step");


            if (
                onboardingPaso >=
                pasos.length - 1
            ) {

                finalizarOnboarding();

                return;

            }


            onboardingPaso++;

            renderOnboarding();

        }
    );


    renderOnboarding();


    if (
        leerLocal(
            "pausa5OnboardingVisto"
        ) !== "true"
    ) {

        setTimeout(
            () => {

                abrirOverlay(
                    onboarding
                );

            },
            750
        );

    }

}



function renderOnboarding() {

    const pasos =
        $$(".onboarding-step");


    pasos.forEach(
        (paso, index) => {

            paso.classList.toggle(
                "active",
                index === onboardingPaso
            );

        }
    );


    onboardingDots.innerHTML =
        "";


    pasos.forEach(
        (_, index) => {

            const punto =
                document.createElement(
                    "span"
                );


            punto.className =
                "onboarding-dot";


            if (
                index === onboardingPaso
            ) {

                punto.classList.add(
                    "active"
                );

            }


            onboardingDots.appendChild(
                punto
            );

        }
    );


    onboardingSiguiente.textContent =
        onboardingPaso ===
        pasos.length - 1
            ? "Empezar"
            : "Siguiente";

}



function finalizarOnboarding() {

    guardarLocal(
        "pausa5OnboardingVisto",
        "true"
    );


    cerrarOverlay(
        onboarding
    );

}



// =========================================
// OVERLAYS
// =========================================

function abrirOverlay(
    elemento
) {

    elemento.classList.add(
        "active"
    );


    elemento.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}



function cerrarOverlay(
    elemento
) {

    elemento.classList.remove(
        "active"
    );


    elemento.setAttribute(
        "aria-hidden",
        "true"
    );


    const alguno =

        panelRutina.classList.contains(
            "active"
        )

        ||

        onboarding.classList.contains(
            "active"
        )

        ||

        panelPreferencias.classList.contains(
            "active"
        );


    if (
        !alguno
    ) {

        document.body.classList.remove(
            "modal-open"
        );

    }

}



// =========================================
// BOTONES INICIO
// =========================================

function configurarBotonesInicio() {

    $$(".iniciar-rutina")
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        if (
                            !estadoActual
                        ) {

                            $("#estado")
                                .scrollIntoView({
                                    behavior:
                                        "smooth"
                                });


                            mostrarToast(
                                "Primero elige cómo te sientes hoy."
                            );


                            return;

                        }


                        iniciarRutina();

                    }
                );

            }
        );

}



// =========================================
// ESTADOS
// =========================================

function configurarEstados() {

    $$(".mood-card")
        .forEach(
            tarjeta => {

                tarjeta.addEventListener(
                    "click",
                    () => {

                        seleccionarEstado(
                            tarjeta.dataset.estado,
                            true
                        );

                    }
                );

            }
        );


    comenzarEstado.addEventListener(
        "click",
        iniciarRutina
    );


    cambiarEstado.addEventListener(
        "click",
        () => {

            $("#estado")
                .scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );

}



function seleccionarEstado(
    clave,
    mostrarMensaje = true
) {

    const estado =
        estados[clave];


    if (
        !estado
    ) {

        return;

    }


    estadoActual =
        clave;


    rutinaActual =
        estado.ejercicios;


    $$(".mood-card")
        .forEach(
            card => {

                card.classList.remove(
                    "selected"
                );

            }
        );


    const actual =
        document.querySelector(
            `[data-estado="${clave}"]`
        );


    if (
        actual
    ) {

        actual.classList.add(
            "selected"
        );

    }


    estadoSeleccionadoEmoji.textContent =
        estado.emoji;


    estadoSeleccionadoTitulo.textContent =
        estado.titulo;


    estadoSeleccionadoTexto.textContent =
        estado.mensaje;


    estadoSeleccionado.classList.remove(
        "hidden"
    );


    rutinaSeleccionadaTexto.innerHTML =
        `${estado.emoji} <span>${estado.nombreRutina}</span>`;


    rutinaSeleccionadaTexto.classList.remove(
        "hidden"
    );


    actualizarTarjetasRutina(
        rutinaActual
    );


    if (
        preferencias.recordarEstado
    ) {

        guardarLocal(
            "pausa5UltimoEstado",
            clave
        );

    }


    if (
        mostrarMensaje
    ) {

        mostrarToast(
            `${estado.emoji} ${estado.nombreRutina} preparada.`
        );

    }

}



function actualizarTarjetasRutina(
    rutina
) {

    $$(".exercise-card")
        .forEach(
            (tarjeta, index) => {

                const ejercicio =
                    rutina[index];


                if (
                    !ejercicio
                ) {

                    return;

                }


                tarjeta.querySelector(
                    ".exercise-emoji"
                ).textContent =
                    ejercicio.emoji;


                tarjeta.querySelector(
                    "h3"
                ).textContent =
                    ejercicio.nombre;


                tarjeta.querySelector(
                    "p"
                ).textContent =
                    ejercicio.descripcion;

            }
        );

}



// =========================================
// RUTINA
// =========================================

function configurarRutina() {

    cerrarRutina.addEventListener(
        "click",
        cerrarPanelRutina
    );


    cerrarFinal.addEventListener(
        "click",
        cerrarPanelRutina
    );


    repetirRutina.addEventListener(
        "click",
        iniciarRutina
    );


    botonPausar.addEventListener(
        "click",
        alternarPausa
    );


    botonAnterior.addEventListener(
        "click",
        irAnterior
    );


    botonSiguiente.addEventListener(
        "click",
        completarEjercicio
    );


    botonSonido.addEventListener(
        "click",
        alternarSonido
    );


    panelRutina.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                panelRutina
            ) {

                cerrarPanelRutina();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            if (
                panelRutina.classList.contains(
                    "active"
                )
            ) {

                cerrarPanelRutina();

                return;

            }


            if (
                panelPreferencias.classList.contains(
                    "active"
                )
            ) {

                cerrarOverlay(
                    panelPreferencias
                );

                return;

            }


            if (
                onboarding.classList.contains(
                    "active"
                )
            ) {

                cerrarOverlay(
                    onboarding
                );

            }

        }
    );

}



// =========================================
// INICIAR RUTINA
// =========================================

function iniciarRutina() {

    if (
        !estadoActual
    ) {

        $("#estado")
            .scrollIntoView({
                behavior:
                    "smooth"
            });


        mostrarToast(
            "Primero elige cómo te sientes hoy."
        );


        return;

    }


    limpiarTimers();


    rutinaAbierta =
        true;


    finalRegistrado =
        false;


    respuestaEstadoFinal =
        null;


    respuestaUtilFinal =
        null;


    ejercicioActual =
        0;


    tiempoRestante =
        DURACION_EJERCICIO;


    estaPausado =
        false;


    limpiarFeedbackVisual();


    guardarSesion();


    abrirOverlay(
        panelRutina
    );


    mostrarCountdown();

}



// =========================================
// CERRAR
// =========================================

function cerrarPanelRutina() {

    if (
        rutinaAbierta
    ) {

        guardarSesion();

    }


    limpiarTimers();


    rutinaAbierta =
        false;


    estaPausado =
        false;


    cerrarOverlay(
        panelRutina
    );


    revisarSesionGuardada();

}



// =========================================
// VISTAS
// =========================================

function mostrarVista(
    vistaActiva
) {

    [

        vistaCountdown,

        vistaEjercicio,

        vistaTransicion,

        vistaCompletado

    ].forEach(
        vista => {

            vista.classList.add(
                "hidden"
            );

        }
    );


    vistaActiva.classList.remove(
        "hidden"
    );

}



// =========================================
// COUNTDOWN
// =========================================

function mostrarCountdown() {

    limpiarTimers();


    mostrarVista(
        vistaCountdown
    );


    let numero =
        3;


    countdown.textContent =
        String(numero);


    textoCountdown.textContent =
        "Comenzamos en...";


    beep(
        440,
        0.08
    );


    timerCountdown =
        setInterval(
            () => {

                numero--;


                if (
                    numero > 0
                ) {

                    countdown.textContent =
                        String(numero);


                    beep(
                        440,
                        0.08
                    );


                    return;

                }


                clearInterval(
                    timerCountdown
                );


                timerCountdown =
                    null;


                countdown.textContent =
                    "¡Vamos!";


                textoCountdown.textContent =
                    "Tu Pausa5 comienza ahora";


                beep(
                    760,
                    0.14
                );


                vibrar(
                    [60, 40, 60]
                );


                timerCountdownFinal =
                    setTimeout(
                        cargarEjercicio,
                        700
                    );

            },
            1000
        );

}



// =========================================
// CARGAR EJERCICIO
// =========================================

function cargarEjercicio() {

    limpiarTimers();


    mostrarVista(
        vistaEjercicio
    );


    const ejercicio =
        rutinaActual[
            ejercicioActual
        ];


    if (
        !ejercicio
    ) {

        completarRutina();

        return;

    }


    if (
        tiempoRestante <= 0 ||
        tiempoRestante >
        DURACION_EJERCICIO
    ) {

        tiempoRestante =
            DURACION_EJERCICIO;

    }


    progresoTexto.textContent =
        `Ejercicio ${ejercicioActual + 1} de ${rutinaActual.length}`;


    emojiRutina.textContent =
        ejercicio.emoji;


    nombreEjercicio.textContent =
        ejercicio.nombre;


    descripcionEjercicio.textContent =
        ejercicio.descripcion;


    botonPausar.textContent =
        estaPausado
            ? "▶ Continuar"
            : "⏸ Pausar";


    mensajeTiempo.textContent =
        estaPausado
            ? "Rutina pausada"
            : "Ve a tu propio ritmo 💚";


    botonAnterior.disabled =
        ejercicioActual === 0;


    actualizarTemporizador();

    actualizarCirculo();

    actualizarPuntos();

    guardarSesion();


    timerEjercicio =
        setInterval(
            () => {

                if (
                    estaPausado
                ) {

                    return;

                }


                tiempoRestante--;


                if (
                    tiempoRestante < 0
                ) {

                    tiempoRestante =
                        0;

                }


                actualizarTemporizador();

                actualizarCirculo();

                guardarSesion();


                if (
                    tiempoRestante === 0
                ) {

                    clearInterval(
                        timerEjercicio
                    );


                    timerEjercicio =
                        null;


                    completarEjercicio();

                }

            },
            1000
        );

}



// =========================================
// TIMER
// =========================================

function actualizarTemporizador() {

    const minutos =
        Math.floor(
            tiempoRestante /
            60
        );


    const segundos =
        tiempoRestante %
        60;


    temporizador.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}



function prepararCirculo() {

    circuloProgreso.style.strokeDasharray =
        String(
            CIRCUNFERENCIA
        );


    circuloProgreso.style.strokeDashoffset =
        "0";

}



function actualizarCirculo() {

    const porcentaje =
        tiempoRestante /
        DURACION_EJERCICIO;


    const desplazamiento =
        CIRCUNFERENCIA *
        (1 - porcentaje);


    circuloProgreso.style.strokeDasharray =
        String(
            CIRCUNFERENCIA
        );


    circuloProgreso.style.strokeDashoffset =
        String(
            desplazamiento
        );

}



// =========================================
// PUNTOS
// =========================================

function actualizarPuntos() {

    puntosProgreso.innerHTML =
        "";


    rutinaActual.forEach(
        (_, index) => {

            const punto =
                document.createElement(
                    "span"
                );


            punto.className =
                "progress-dot";


            if (
                index <
                ejercicioActual
            ) {

                punto.classList.add(
                    "done"
                );

            }


            if (
                index ===
                ejercicioActual
            ) {

                punto.classList.add(
                    "current"
                );

            }


            puntosProgreso.appendChild(
                punto
            );

        }
    );

}



// =========================================
// PAUSAR
// =========================================

function alternarPausa() {

    estaPausado =
        !estaPausado;


    botonPausar.textContent =
        estaPausado
            ? "▶ Continuar"
            : "⏸ Pausar";


    mensajeTiempo.textContent =
        estaPausado
            ? "Rutina pausada"
            : "Ve a tu propio ritmo 💚";


    guardarSesion();

}



// =========================================
// ANTERIOR
// =========================================

function irAnterior() {

    if (
        ejercicioActual <= 0
    ) {

        return;

    }


    ejercicioActual--;


    tiempoRestante =
        DURACION_EJERCICIO;


    estaPausado =
        false;


    cargarEjercicio();

}



// =========================================
// SIGUIENTE
// =========================================

function completarEjercicio() {

    limpiarTimers();


    beep(
        700,
        0.13
    );


    vibrar(
        90
    );


    if (
        ejercicioActual >=
        rutinaActual.length - 1
    ) {

        completarRutina();

        return;

    }


    siguienteNombre.textContent =
        rutinaActual[
            ejercicioActual + 1
        ].nombre;


    mostrarVista(
        vistaTransicion
    );


    timerTransicion =
        setTimeout(
            () => {

                ejercicioActual++;


                tiempoRestante =
                    DURACION_EJERCICIO;


                estaPausado =
                    false;


                cargarEjercicio();

            },
            1600
        );

}



// =========================================
// FINAL
// =========================================

function completarRutina() {

    limpiarTimers();


    mostrarVista(
        vistaCompletado
    );


    rutinaAbierta =
        false;


    eliminarLocal(
        "pausa5Sesion"
    );


    revisarSesionGuardada();


    beep(
        860,
        0.22
    );


    vibrar(
        [120, 70, 120]
    );


    crearConfeti();


    if (
        !MODO_PRUEBA &&
        !finalRegistrado
    ) {

        finalRegistrado =
            true;


        registrarRutina();

    }

}



// =========================================
// CONFETI
// =========================================

function crearConfeti() {

    confeti.innerHTML =
        "";


    for (
        let i = 0;
        i < 34;
        i++
    ) {

        const pieza =
            document.createElement(
                "span"
            );


        pieza.className =
            "confetti-piece";


        pieza.style.left =
            `${Math.random() * 100}%`;


        pieza.style.animationDelay =
            `${Math.random() * 0.9}s`;


        confeti.appendChild(
            pieza
        );

    }

}



// =========================================
// TIMERS
// =========================================

function limpiarTimers() {

    if (
        timerEjercicio !== null
    ) {

        clearInterval(
            timerEjercicio
        );


        timerEjercicio =
            null;

    }


    if (
        timerCountdown !== null
    ) {

        clearInterval(
            timerCountdown
        );


        timerCountdown =
            null;

    }


    if (
        timerCountdownFinal !== null
    ) {

        clearTimeout(
            timerCountdownFinal
        );


        timerCountdownFinal =
            null;

    }


    if (
        timerTransicion !== null
    ) {

        clearTimeout(
            timerTransicion
        );


        timerTransicion =
            null;

    }

}



// =========================================
// SESIÓN
// =========================================

function guardarSesion() {

    if (
        !estadoActual ||
        !rutinaAbierta
    ) {

        return;

    }


    const sesion = {

        estado:
            estadoActual,

        ejercicioActual:
            ejercicioActual,

        tiempoRestante:
            tiempoRestante,

        estaPausado:
            estaPausado,

        timestamp:
            Date.now()

    };


    guardarLocal(
        "pausa5Sesion",
        JSON.stringify(
            sesion
        )
    );

}



function obtenerSesion() {

    const raw =
        leerLocal(
            "pausa5Sesion"
        );


    if (
        !raw
    ) {

        return null;

    }


    try {

        const sesion =
            JSON.parse(
                raw
            );


        if (
            !sesion.estado ||
            !estados[
                sesion.estado
            ]
        ) {

            eliminarLocal(
                "pausa5Sesion"
            );


            return null;

        }


        const antiguedad =
            Date.now() -
            Number(
                sesion.timestamp ||
                0
            );


        if (
            antiguedad >
            24 *
            60 *
            60 *
            1000
        ) {

            eliminarLocal(
                "pausa5Sesion"
            );


            return null;

        }


        return sesion;

    }

    catch {

        eliminarLocal(
            "pausa5Sesion"
        );


        return null;

    }

}



function revisarSesionGuardada() {

    const sesion =
        obtenerSesion();


    if (
        !sesion
    ) {

        resumeBanner.classList.add(
            "hidden"
        );


        return;

    }


    const rutina =
        estados[
            sesion.estado
        ].ejercicios;


    const indice =
        Math.max(
            0,
            Math.min(
                Number(
                    sesion.ejercicioActual
                ) || 0,
                rutina.length - 1
            )
        );


    const ejercicio =
        rutina[indice];


    const restante =
        Math.max(
            1,
            Math.min(
                Number(
                    sesion.tiempoRestante
                ) ||
                DURACION_EJERCICIO,
                DURACION_EJERCICIO
            )
        );


    const minutos =
        Math.floor(
            restante /
            60
        );


    const segundos =
        restante %
        60;


    resumeTexto.textContent =
        `${ejercicio.nombre} · ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")} restantes`;


    resumeBanner.classList.remove(
        "hidden"
    );

}



function configurarReanudacion() {

    reanudarRutina.addEventListener(
        "click",
        () => {

            const sesion =
                obtenerSesion();


            if (
                !sesion
            ) {

                revisarSesionGuardada();

                return;

            }


            seleccionarEstado(
                sesion.estado,
                false
            );


            ejercicioActual =
                Math.max(
                    0,
                    Math.min(
                        Number(
                            sesion.ejercicioActual
                        ) || 0,
                        rutinaActual.length - 1
                    )
                );


            tiempoRestante =
                Math.max(
                    1,
                    Math.min(
                        Number(
                            sesion.tiempoRestante
                        ) ||
                        DURACION_EJERCICIO,
                        DURACION_EJERCICIO
                    )
                );


            estaPausado =
                Boolean(
                    sesion.estaPausado
                );


            rutinaAbierta =
                true;


            finalRegistrado =
                false;


            limpiarFeedbackVisual();


            abrirOverlay(
                panelRutina
            );


            cargarEjercicio();

        }
    );


    descartarRutina.addEventListener(
        "click",
        () => {

            eliminarLocal(
                "pausa5Sesion"
            );


            revisarSesionGuardada();


            mostrarToast(
                "Pausa pendiente descartada."
            );

        }
    );

}



// =========================================
// SONIDO
// =========================================

function alternarSonido() {

    preferencias.sonido =
        !preferencias.sonido;


    guardarPreferencias();

    actualizarIconoSonido();


    if (
        preferencias.sonido
    ) {

        beep(
            620,
            0.08
        );

    }

}



function actualizarIconoSonido() {

    botonSonido.textContent =
        preferencias.sonido
            ? "🔊"
            : "🔇";


    if (
        preferenciaSonido
    ) {

        preferenciaSonido.checked =
            preferencias.sonido;

    }

}



function beep(
    frecuencia = 600,
    duracion = 0.1
) {

    if (
        !preferencias.sonido
    ) {

        return;

    }


    try {

        const AudioContextClase =
            window.AudioContext ||
            window.webkitAudioContext;


        if (
            !AudioContextClase
        ) {

            return;

        }


        if (
            !audioContext
        ) {

            audioContext =
                new AudioContextClase();

        }


        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext.resume()
                .catch(
                    () => {}
                );

        }


        const osc =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        osc.connect(
            gain
        );


        gain.connect(
            audioContext.destination
        );


        osc.frequency.value =
            frecuencia;


        gain.gain.setValueAtTime(
            0.05,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime +
            duracion
        );


        osc.start();


        osc.stop(
            audioContext.currentTime +
            duracion
        );

    }

    catch {

    }

}



// =========================================
// VIBRACIÓN
// =========================================

function vibrar(
    patron
) {

    if (
        !preferencias.vibracion
    ) {

        return;

    }


    if (
        "vibrate" in navigator
    ) {

        try {

            navigator.vibrate(
                patron
            );

        }

        catch {

        }

    }

}



// =========================================
// FEEDBACK FINAL
// =========================================

function configurarFeedbackFinal() {

    $$(".after-option")
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        const valor =
                            boton.dataset.after;


                        $$(".after-option")
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        boton.classList.add(
                            "selected"
                        );


                        registrarFeedbackUnico(
                            "estadoDespues",
                            valor,
                            respuestaEstadoFinal
                        );


                        respuestaEstadoFinal =
                            valor;


                        mostrarToast(
                            "Respuesta guardada en este dispositivo."
                        );

                    }
                );

            }
        );


    $$(".feedback-btn")
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        const valor =
                            boton.dataset.feedback;


                        $$(".feedback-btn")
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        boton.classList.add(
                            "selected"
                        );


                        registrarFeedbackUnico(
                            "util",
                            valor,
                            respuestaUtilFinal
                        );


                        respuestaUtilFinal =
                            valor;


                        feedbackGracias.classList.remove(
                            "hidden"
                        );

                    }
                );

            }
        );

}



function limpiarFeedbackVisual() {

    $$(".after-option")
        .forEach(
            boton => {

                boton.classList.remove(
                    "selected"
                );

            }
        );


    $$(".feedback-btn")
        .forEach(
            boton => {

                boton.classList.remove(
                    "selected"
                );

            }
        );


    feedbackGracias.classList.add(
        "hidden"
    );

}



function registrarFeedbackUnico(
    categoria,
    nuevoValor,
    valorAnterior
) {

    if (
        MODO_PRUEBA
    ) {

        return;

    }


    const datos =
        obtenerEstadisticas();


    if (
        !datos.feedback
    ) {

        datos.feedback =
            {};

    }


    if (
        !datos.feedback[
            categoria
        ]
    ) {

        datos.feedback[
            categoria
        ] =
            {};

    }


    if (
        valorAnterior &&
        valorAnterior !==
        nuevoValor
    ) {

        const cantidadAnterior =
            Number(
                datos.feedback[
                    categoria
                ][
                    valorAnterior
                ] || 0
            );


        datos.feedback[
            categoria
        ][
            valorAnterior
        ] =
            Math.max(
                0,
                cantidadAnterior - 1
            );

    }


    if (
        valorAnterior !==
        nuevoValor
    ) {

        datos.feedback[
            categoria
        ][
            nuevoValor
        ] =
            Number(
                datos.feedback[
                    categoria
                ][
                    nuevoValor
                ] || 0
            )
            +
            1;

    }


    guardarLocal(
        "pausa5Estadisticas",
        JSON.stringify(
            datos
        )
    );

}



// =========================================
// FRASE DIARIA
// =========================================

function cargarFraseDiaria() {

    const ahora =
        new Date();


    const inicio =
        new Date(
            ahora.getFullYear(),
            0,
            0
        );


    const dias =
        Math.floor(
            (ahora - inicio) /
            86400000
        );


    $("#fraseDiaria").textContent =
        frases[
            dias %
            frases.length
        ];

}



// =========================================
// DATOS
// =========================================

function datosDefault() {

    return {

        rutinas:
            0,

        minutos:
            0,

        racha:
            0,

        ultimaFecha:
            null,

        diasActivos:
            {},

        estadosUsados:
            {},

        feedback:
            {}

    };

}



function obtenerEstadisticas() {

    const raw =
        leerLocal(
            "pausa5Estadisticas"
        );


    if (
        !raw
    ) {

        return datosDefault();

    }


    try {

        const datos =
            JSON.parse(
                raw
            );


        return {

            ...datosDefault(),

            ...datos,

            diasActivos:
                datos.diasActivos || {},

            estadosUsados:
                datos.estadosUsados || {},

            feedback:
                datos.feedback || {}

        };

    }

    catch {

        return datosDefault();

    }

}



function fechaLocal(
    fecha = new Date()
) {

    const y =
        fecha.getFullYear();


    const m =
        String(
            fecha.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const d =
        String(
            fecha.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${y}-${m}-${d}`;

}



// =========================================
// REGISTRAR
// =========================================

function registrarRutina() {

    const datos =
        obtenerEstadisticas();


    const hoy =
        fechaLocal();


    const ayerFecha =
        new Date();


    ayerFecha.setDate(
        ayerFecha.getDate() - 1
    );


    const ayer =
        fechaLocal(
            ayerFecha
        );


    datos.rutinas =
        Number(
            datos.rutinas || 0
        )
        +
        1;


    datos.minutos =
        Number(
            datos.minutos || 0
        )
        +
        5;


    datos.diasActivos[
        hoy
    ] =
        Number(
            datos.diasActivos[
                hoy
            ] || 0
        )
        +
        1;


    if (
        estadoActual
    ) {

        datos.estadosUsados[
            estadoActual
        ] =
            Number(
                datos.estadosUsados[
                    estadoActual
                ] || 0
            )
            +
            1;

    }


    if (
        datos.ultimaFecha !==
        hoy
    ) {

        if (
            datos.ultimaFecha ===
            ayer
        ) {

            datos.racha =
                Number(
                    datos.racha || 0
                )
                +
                1;

        }

        else {

            datos.racha =
                1;

        }


        datos.ultimaFecha =
            hoy;

    }


    guardarLocal(
        "pausa5Estadisticas",
        JSON.stringify(
            datos
        )
    );


    actualizarEstadisticas();

}



// =========================================
// ACTUALIZAR STATS
// =========================================

function actualizarEstadisticas() {

    const datos =
        obtenerEstadisticas();


    rachaValor.textContent =
        String(
            datos.racha
        );


    rutinasValor.textContent =
        String(
            datos.rutinas
        );


    minutosValor.textContent =
        String(
            datos.minutos
        );


    perfilRacha.textContent =
        String(
            datos.racha
        );


    perfilRutinas.textContent =
        String(
            datos.rutinas
        );


    perfilMinutos.textContent =
        String(
            datos.minutos
        );


    perfilFavorita.textContent =
        obtenerRutinaFavorita(
            datos
        );


    renderCalendario(
        datos
    );


    renderLogros(
        datos
    );

}



// =========================================
// FAVORITA
// =========================================

function obtenerRutinaFavorita(
    datos
) {

    const entradas =
        Object.entries(
            datos.estadosUsados || {}
        );


    if (
        entradas.length === 0
    ) {

        return "—";

    }


    entradas.sort(
        (a, b) =>
            b[1] - a[1]
    );


    const clave =
        entradas[0][0];


    return estados[
        clave
    ]
        ?
        estados[
            clave
        ].nombreRutina
        :
        "—";

}



// =========================================
// CALENDARIO
// =========================================

function renderCalendario(
    datos
) {

    calendarioActividad.innerHTML =
        "";


    for (
        let offset = 27;
        offset >= 0;
        offset--
    ) {

        const fecha =
            new Date();


        fecha.setHours(
            12,
            0,
            0,
            0
        );


        fecha.setDate(
            fecha.getDate() -
            offset
        );


        const clave =
            fechaLocal(
                fecha
            );


        const cantidad =
            Number(
                datos.diasActivos[
                    clave
                ] || 0
            );


        const cuadro =
            document.createElement(
                "span"
            );


        cuadro.className =
            "activity-day";


        if (
            cantidad === 1
        ) {

            cuadro.classList.add(
                "level-1"
            );

        }


        if (
            cantidad === 2
        ) {

            cuadro.classList.add(
                "level-2"
            );

        }


        if (
            cantidad >= 3
        ) {

            cuadro.classList.add(
                "level-3"
            );

        }


        cuadro.title =
            `${clave}: ${cantidad} rutina${cantidad === 1 ? "" : "s"}`;


        calendarioActividad.appendChild(
            cuadro
        );

    }

}



// =========================================
// LOGROS
// =========================================

function renderLogros(
    datos
) {

    listaLogros.innerHTML =
        "";


    let desbloqueados =
        0;


    LOGROS.forEach(
        logro => {

            const logrado =
                logro.cumple(
                    datos
                );


            if (
                logrado
            ) {

                desbloqueados++;

            }


            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.className =
                "achievement";


            if (
                logrado
            ) {

                tarjeta.classList.add(
                    "unlocked"
                );

            }


            tarjeta.innerHTML = `

                <div class="achievement-icon">
                    ${logro.icono}
                </div>

                <h4>
                    ${logro.nombre}
                </h4>

                <p>
                    ${logro.descripcion}
                </p>

            `;


            listaLogros.appendChild(
                tarjeta
            );

        }
    );


    logrosContador.textContent =
        `${desbloqueados} / ${LOGROS.length}`;

}



// =========================================
// TEMA
// =========================================

function configurarTema() {

    if (
        leerLocal(
            "pausa5Tema",
            "claro"
        ) ===
        "oscuro"
    ) {

        document.body.classList.add(
            "dark"
        );

    }


    actualizarBotonTema();


    botonTema.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            guardarLocal(
                "pausa5Tema",
                document.body.classList.contains(
                    "dark"
                )
                    ? "oscuro"
                    : "claro"
            );


            actualizarBotonTema();

        }
    );

}



function actualizarBotonTema() {

    const oscuro =
        document.body.classList.contains(
            "dark"
        );


    botonTema.textContent =
        oscuro
            ? "☀️"
            : "🌙";

}



// =========================================
// AYUDA
// =========================================

function configurarAyuda() {

    botonDudas.addEventListener(
        "click",
        () => {

            const abrir =
                !cajaDudas.classList.contains(
                    "active"
                );


            cajaDudas.classList.toggle(
                "active",
                abrir
            );


            cajaDudas.setAttribute(
                "aria-hidden",
                String(
                    !abrir
                )
            );

        }
    );


    cerrarDudas.addEventListener(
        "click",
        cerrarPanelAyuda
    );


    document.addEventListener(
        "click",
        event => {

            const dentro =

                cajaDudas.contains(
                    event.target
                )

                ||

                botonDudas.contains(
                    event.target
                );


            if (
                !dentro &&
                cajaDudas.classList.contains(
                    "active"
                )
            ) {

                cerrarPanelAyuda();

            }

        }
    );

}



function cerrarPanelAyuda() {

    cajaDudas.classList.remove(
        "active"
    );


    cajaDudas.setAttribute(
        "aria-hidden",
        "true"
    );

}



// =========================================
// FAQ
// =========================================

function configurarFAQ() {

    $$(".faq-question")
        .forEach(
            pregunta => {

                pregunta.addEventListener(
                    "click",
                    () => {

                        const respuesta =
                            pregunta.nextElementSibling;


                        const estabaAbierta =
                            respuesta.classList.contains(
                                "open"
                            );


                        $$(".faq-answer")
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "open"
                                    );

                                }
                            );


                        $$(".faq-question span")
                            .forEach(
                                span => {

                                    span.textContent =
                                        "+";

                                }
                            );


                        if (
                            !estabaAbierta
                        ) {

                            respuesta.classList.add(
                                "open"
                            );


                            const signo =
                                pregunta.querySelector(
                                    "span"
                                );


                            if (
                                signo
                            ) {

                                signo.textContent =
                                    "−";

                            }

                        }

                    }
                );

            }
        );

}



// =========================================
// WHATSAPP
// =========================================

function configurarWhatsapp() {

    if (
        !NUMERO_WHATSAPP
    ) {

        abrirWhatsapp.disabled =
            true;


        whatsappAviso.classList.remove(
            "hidden"
        );


        return;

    }


    abrirWhatsapp.disabled =
        false;


    whatsappAviso.classList.add(
        "hidden"
    );


    abrirWhatsapp.addEventListener(
        "click",
        () => {

            const mensaje =
                encodeURIComponent(
`Hola 👋, vengo desde Pausa5.

Tengo una consulta sobre la aplicación.

Mi duda o problema es:


Gracias por la ayuda 💚`
                );


            window.open(
                `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}



// =========================================
// PWA
// =========================================

function configurarPWA() {

    if (
        "serviceWorker"
        in navigator
    ) {

        window.addEventListener(
            "load",
            () => {

                navigator.serviceWorker
                    .register(
                        "./service-worker.js"
                    )
                    .catch(
                        () => {}
                    );

            }
        );

    }


    window.addEventListener(
        "beforeinstallprompt",
        event => {

            event.preventDefault();


            deferredInstallPrompt =
                event;


            botonInstalar.classList.remove(
                "install-hidden"
            );

        }
    );


    botonInstalar.addEventListener(
        "click",
        async () => {

            if (
                !deferredInstallPrompt
            ) {

                mostrarToast(
                    "La instalación se gestiona desde el menú de tu navegador."
                );


                return;

            }


            deferredInstallPrompt.prompt();


            try {

                await deferredInstallPrompt.userChoice;

            }

            catch {

            }


            deferredInstallPrompt =
                null;


            botonInstalar.classList.add(
                "install-hidden"
            );

        }
    );


    window.addEventListener(
        "appinstalled",
        () => {

            deferredInstallPrompt =
                null;


            botonInstalar.classList.add(
                "install-hidden"
            );


            mostrarToast(
                "Pausa5 fue instalada."
            );

        }
    );


    window.addEventListener(
        "offline",
        () => {

            mostrarToast(
                "Estás sin conexión. Pausa5 seguirá usando los archivos guardados."
            );

        }
    );


    window.addEventListener(
        "online",
        () => {

            mostrarToast(
                "Conexión recuperada."
            );

        }
    );

}



// =========================================
// REVEAL
// =========================================

function configurarAnimaciones() {

    const elementos =
        $$(".reveal");


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        elementos.forEach(
            elemento => {

                elemento.classList.add(
                    "visible"
                );

            }
        );


        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.12
            }
        );


    elementos.forEach(
        elemento => {

            observer.observe(
                elemento
            );

        }
    );

}



// =========================================
// TOAST
// =========================================

function mostrarToast(
    mensaje
) {

    toast.textContent =
        mensaje;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2600
        );

}

//commit comment 