// Datos completos del proceso de tesis
const stepsData = {
    fase1: {
        title: "📘 FASE 1: Plan de Tesis",
        steps: [
            {
                id: 1,
                number: "1",
                sidebarTitle: "Buscar Director",
                title: "Buscar Director de Tesis",
                description: "<strong>👨‍🏫 Objetivo:</strong> Encontrar un profesor que acepte dirigir tu investigación.<br><br>El Director de Tesis será tu guía principal durante todo el proceso. Debe ser un experto en el área de tu investigación y tener disponibilidad para orientarte.",
                planillas: ["Planilla 1: Propuesta de Director", "CV del Director"],
                timeline: [
                    "Identificas un profesor del área de tu interés",
                    "Le consultas si acepta ser tu Director",
                    "Completas la Planilla 1 con sus datos",
                    "Envías al Director de Posgrado: Planilla 1 + CV del Director"
                ],
                actionType: "continue",
                actionText: "✓ Director Encontrado - Continuar"
            },
            {
                id: 2,
                number: "2",
                sidebarTitle: "Aprobación Director",
                title: "Aprobación del Director",
                description: "<strong>🏛️ Evaluación:</strong> El Comité Académico revisa las credenciales del Director propuesto.<br><br>Se evalúa si el profesor tiene la experiencia académica y experticia necesaria para dirigir tu tesis.",
                planillas: ["Planilla 2: Evaluación CV Director"],
                warning: "<strong>⏳ Tiempo de espera típico:</strong> Entre 1 y 3 semanas para recibir la respuesta del Comité Académico.",
                actionType: "decision",
                decisions: [
                    { type: "approved", text: "✅ APROBADO", subtitle: "El director fue aceptado", nextStep: 3 },
                    { type: "rejected", text: "❌ RECHAZADO", subtitle: "Buscar otro director", nextStep: 1 }
                ]
            },
            {
                id: 3,
                number: "3",
                sidebarTitle: "Elaborar Plan",
                title: "Elaborar Plan de Tesis",
                description: "<strong>📝 Objetivo:</strong> Diseñar tu proyecto de investigación.<br><br>El Plan de Tesis es un documento donde describes QUÉ vas a investigar, CÓMO lo harás, y CUÁNDO lo completarás.",
                infoList: [
                    "Título tentativo",
                    "Problema de investigación",
                    "Objetivos general y específicos",
                    "Marco teórico preliminar",
                    "Metodología",
                    "Cronograma",
                    "Bibliografía"
                ],
                timeline: [
                    "Trabajas en tu Plan con el Director",
                    "El Director revisa y da su aval",
                    "Envías el Plan al Director de Posgrado"
                ],
                actionType: "continue",
                actionText: "✓ Plan Elaborado - Continuar"
            },
            {
                id: 4,
                number: "4",
                sidebarTitle: "Evaluación Plan",
                title: "Evaluación del Plan de Tesis",
                description: "<strong>🏛️ Evaluación:</strong> El Comité Académico revisa la viabilidad y calidad de tu Plan.<br><br>Evalúan si tu proyecto es realizable, relevante y tiene el nivel académico requerido para una maestría.",
                planillas: ["Planilla 3: Evaluación Plan de Tesis"],
                actionType: "decision",
                decisions: [
                    { type: "approved", text: "✅ APROBADO", subtitle: "¡A escribir la tesis!", nextStep: 5 },
                    { type: "observed", text: "⚠️ CON OBSERVACIONES", subtitle: "Corregir y reenviar", nextStep: 3 },
                    { type: "rejected", text: "❌ RECHAZADO", subtitle: "Rehacer el plan", nextStep: 3 }
                ]
            }
        ]
    },
    fase2: {
        title: "📗 FASE 2: Tesis y Defensa",
        steps: [
            {
                id: 5,
                number: "5",
                sidebarTitle: "Escribir Tesis",
                title: "Escribir la Tesis",
                description: "<strong>✍️ Objetivo:</strong> Desarrollar tu investigación completa.<br><br>Esta es la fase más extensa del proceso. Implementas tu investigación, analizas resultados y escribes el documento completo.",
                infoList: [
                    "Resumen/Abstract",
                    "Introducción",
                    "Marco Teórico",
                    "Metodología",
                    "Resultados",
                    "Discusión",
                    "Conclusiones",
                    "Referencias",
                    "Anexos"
                ],
                warning: "<strong>💡 Recomendación:</strong> Mantén reuniones periódicas con tu Director (cada 2-4 semanas) para revisar avances y recibir retroalimentación.",
                timeline: [
                    "Desarrollas tu investigación",
                    "Escribes los capítulos de la tesis",
                    "Tu Director revisa y aprueba",
                    "Envías la tesis final al Director de Posgrado"
                ],
                actionType: "continue",
                actionText: "✓ Tesis Completa - Continuar"
            },
            {
                id: 6,
                number: "6",
                sidebarTitle: "Designar Tribunal",
                title: "Designación del Tribunal",
                description: "<strong>⚖️ Objetivo:</strong> Se designan 3 evaluadores expertos para juzgar tu trabajo.<br><br>El Director de Posgrado selecciona a tres profesores especialistas en tu área que no hayan participado en tu investigación.",
                planillas: ["Planilla 4: Designación Tribunal", "Planilla 5: Aceptación de cada Juez"],
                timeline: [
                    "Se proponen 3 evaluadores",
                    "Cada uno debe aceptar la designación",
                    "Si alguno rechaza, se designa otro",
                    "Una vez los 3 aceptan, reciben tu tesis"
                ],
                actionType: "continue",
                actionText: "✓ Tribunal Designado - Continuar"
            },
            {
                id: 7,
                number: "7",
                sidebarTitle: "Evaluación Escrita",
                title: "Evaluación Escrita del Tribunal",
                description: "<strong>📖 Evaluación:</strong> Los 3 jueces leen tu tesis completa y emiten su dictamen.<br><br>Cada evaluador analiza la calidad, rigurosidad y aporte de tu investigación.",
                planillas: ["Planilla 6: Evaluación de Tesis"],
                warning: "<strong>⏳ Tiempo de evaluación:</strong> Típicamente 4-8 semanas. Cada juez trabaja de forma independiente.",
                actionType: "decision",
                decisions: [
                    { type: "approved", text: "🟢 A: SIN OBSERVACIONES", subtitle: "Pasar directamente a defensa oral", nextStep: 8 },
                    { type: "observed", text: "🟡 B: CON OBSERVACIONES", subtitle: "Defender atendiendo correcciones", nextStep: 8 },
                    { type: "rejected", text: "🔴 C: RECHAZADA", subtitle: "Corregir y re-evaluar", nextStep: 5 }
                ]
            },
            {
                id: 8,
                number: "8",
                sidebarTitle: "Defensa Oral",
                title: "Defensa Oral y Pública",
                description: "<strong>🎤 Objetivo:</strong> Presentar y defender tu investigación ante el Tribunal.<br><br>En una sesión pública, expones los aspectos principales de tu trabajo y respondes preguntas del Tribunal.",
                infoList: [
                    "<strong>15-20 min:</strong> Tu presentación (problema, metodología, resultados, conclusiones)",
                    "<strong>30-45 min:</strong> Preguntas y respuestas del Tribunal",
                    "<strong>15-20 min:</strong> Deliberación del Tribunal (a puertas cerradas)",
                    "<strong>5 min:</strong> Anuncio del resultado"
                ],
                tips: [
                    "Prepara una presentación clara con slides",
                    "Enfócate en los aportes principales",
                    "Practica con tu Director",
                    "Llega 15 minutos antes",
                    "Respira y confía en tu trabajo"
                ],
                actionType: "decision",
                decisions: [
                    { type: "approved", text: "✅ APROBADA", subtitle: "¡Felicitaciones, Magister!", nextStep: 9 },
                    { type: "observed", text: "⚠️ OBSERVADA", subtitle: "Modificar según indicaciones", nextStep: null },
                    { type: "rejected", text: "❌ RECHAZADA", subtitle: "Ver dictamen fundado", nextStep: null }
                ]
            },
            {
                id: 9,
                number: "🎉",
                sidebarTitle: "¡Título!",
                title: "¡Título Obtenido!",
                description: "<h2 style='color: #4CAF50; font-size: 3em; margin-bottom: 20px; text-align: center;'>🎓 ¡FELICITACIONES! 🎓</h2><h3 style='color: #667eea; font-size: 2em; margin-bottom: 30px; text-align: center;'>Eres oficialmente Magíster</h3>",
                planillas: ["Planilla 7: Conformidad de Publicación", "Planilla 8: Acta de Examen"],
                timeline: [
                    "Completar conformidad de publicación",
                    "El Tribunal completa el acta de examen",
                    "Iniciar trámite del título en División de Alumnos",
                    "Esperar emisión del diploma oficial"
                ],
                nextSteps: [
                    "Publica tu tesis en repositorios académicos",
                    "Considera convertir capítulos en artículos científicos",
                    "Comparte tus hallazgos en conferencias",
                    "Actualiza tu CV y LinkedIn con tu nuevo título",
                    "Continúa aprendiendo y contribuyendo a tu campo"
                ],
                actionType: "final"
            }
        ]
    }
};
