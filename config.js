// ============================================
// 💝 PERSONALIZA AQUÍ TU PÁGINA WEB DE SAN VALENTÍN 💝
// ============================================

const CONFIG = {
    // El nombre de tu San Valentín que aparecerá en el título
    // Ejemplo: "Jade", "Sarah", "Mike"
    valentineName: "Joy",

    // El título que aparece en la pestaña del navegador
    // ¡Puedes usar emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "¿Serás mi San Valentín? 💝",

    // Emojis flotantes que aparecen en el fondo
    // Encuentra más emojis en: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Emojis de corazones
        bears: ['🧸', '🐻']                       // Emojis de ositos lindos
    },

    // Preguntas y respuestas
    // Personaliza cada pregunta y sus posibles respuestas
    questions: {
        first: {
            text: "¿Te gusto?",                                    // Primera interacción
            yesBtn: "Sí",                                             // Texto para el botón de "Sí"
            noBtn: "No",                                               // Texto para el botón de "No"
            secretAnswer: "No me gustas, ¡te quierooo! ❤️"           // Mensaje secreto al pasar el cursor
        },
        second: {
            text: "¿Cuánto me quieres?",                          // Para el medidor de amor
            startText: "¡Así de mucho!",                                   // Texto antes del porcentaje
            nextBtn: "Siguiente ❤️"                                         // Texto para el botón de siguiente
        },
        third: {
            text: "¿Serás mi San Valentín el 14 de febrero de 2025? 🌹", // ¡La gran pregunta!
            yesBtn: "¡Sí!",                                             // Texto para el botón de "Sí"
            noBtn: "No"                                                 // Texto para el botón de "No"
        }
    },

    // Mensajes del medidor de amor
    // Aparecen dependiendo de qué tan lejos deslicen el medidor
    loveMessages: {
        extreme: "¡WOOOOW! ¿Me quieres tanto?? 🥰🚀💝",  // Se muestra cuando pasan el 5000%
        high: "¡Hasta el infinito y más allá! 🚀💝",              // Se muestra cuando pasan el 1000%
        normal: "¡Y más allá! 🥰"                           // Se muestra cuando pasan el 100%
    },

    // Mensajes que aparecen después de que dicen "¡Sí!"
    celebration: {
        title: "¡Yay! ¡Soy la persona más afortunada del mundo! 🎉💝💖💝💓",
        message: "¡Ahora ven por tu regalo, un gran abrazo y un enorme beso!",
        emojis: "🎁💖🤗💝💋❤️💕"  // Estos saltarán por la pantalla
    },

    // Esquema de colores para la página web
    // Usa https://colorhunt.co o https://coolors.co para encontrar combinaciones de colores hermosas
    colors: {
        backgroundStart: "#ffafbd",      // Comienzo del gradiente (prueba colores pastel para un look suave)
        backgroundEnd: "#ffc3a0",        // Final del gradiente (debe complementar al backgroundStart)
        buttonBackground: "#ff6b6b",     // Color del botón (debe destacarse contra el fondo)
        buttonHover: "#ff8787",          // Color al pasar el cursor sobre el botón (un poco más claro que el color del botón)
        textColor: "#ff4757"             // Color del texto (¡asegúrate de que sea legible!)
    },

    // Configuración de animaciones
    // Ajusta estos si deseas animaciones más rápidas/lentas
    animations: {
        floatDuration: "15s",           // Cuánto tarda en flotar un corazón (se recomienda entre 10-20s)
        floatDistance: "50px",          // Qué tan lejos se mueve el corazón de lado (se recomienda entre 30-70px)
        bounceSpeed: "0.5s",            // Velocidad de las animaciones de rebote (se recomienda entre 0.3-0.7s)
        heartExplosionSize: 1.5         // Tamaño del efecto de explosión de corazones (se recomienda entre 1.2-2.0)
    },

    // Música de fondo (Opcional)
    // Agrega tu propia URL de música después de obtener las licencias correspondientes
    music: {
        enabled: true,                     // La función de música está activada
        autoplay: true,                    // Intenta reproducir automáticamente (nota: algunos navegadores pueden bloquear esto)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // URL de música en streaming
        startText: "🎵 Reproducir música",        // Texto del botón para empezar la música
        stopText: "🔇 Detener música",         // Texto del botón para detener la música
        volume: 0.5                        // Nivel de volumen (de 0.0 a 1.0)
    }
};

// No modifiques nada debajo de esta línea a menos que sepas lo que estás haciendo
window.VALENTINE_CONFIG = CONFIG;
