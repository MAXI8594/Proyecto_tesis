// Variables globales
let currentStep = 1;
let completedSteps = new Set();

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    renderSidebar();
    renderContent();
    setupEventListeners();
    updateProgress();
});

// Renderizar sidebar
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    let html = '';

    // Fase 1
    html += `<div class="fase-section">`;
    html += `<div class="fase-title">${stepsData.fase1.title}</div>`;
    stepsData.fase1.steps.forEach(step => {
        const activeClass = step.id === currentStep ? 'active' : '';
        const completedClass = completedSteps.has(step.id) ? 'completed' : '';
        html += `
            <div class="step-item ${activeClass} ${completedClass}" data-step="${step.id}">
                <strong>Paso ${step.number}</strong><br>${step.sidebarTitle}
            </div>
        `;
    });
    html += `</div>`;

    // Fase 2
    html += `<div class="fase-section">`;
    html += `<div class="fase-title">${stepsData.fase2.title}</div>`;
    stepsData.fase2.steps.forEach(step => {
        const activeClass = step.id === currentStep ? 'active' : '';
        const completedClass = completedSteps.has(step.id) ? 'completed' : '';
        html += `
            <div class="step-item ${activeClass} ${completedClass}" data-step="${step.id}">
                <strong>Paso ${step.number}</strong><br>${step.sidebarTitle}
            </div>
        `;
    });
    html += `</div>`;

    sidebar.innerHTML = html;
}

// Renderizar contenido del paso actual
function renderContent() {
    const contentArea = document.getElementById('contentArea');
    const allSteps = [...stepsData.fase1.steps, ...stepsData.fase2.steps];
    const step = allSteps.find(s => s.id === currentStep);

    if (!step) return;

    let html = `
        <div class="step-content active" data-step="${step.id}">
            <div class="step-header">
                <div class="step-number">${step.number}</div>
                <div class="step-title">${step.title}</div>
            </div>

            <div class="step-description">
                ${step.description}
            </div>
    `;

    // Planillas
    if (step.planillas) {
        html += `
            <div class="info-box info">
                <strong>📋 Documentos necesarios:</strong>
                ${step.planillas.map(p => `<span class="planilla">${p}</span>`).join('')}
            </div>
        `;
    }

    // Info List
    if (step.infoList) {
        html += `
            <div class="info-box success">
                <strong>📚 Contenido típico:</strong>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    ${step.infoList.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Tips
    if (step.tips) {
        html += `
            <div class="info-box info">
                <strong>💡 Consejos:</strong>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    ${step.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Warning
    if (step.warning) {
        html += `
            <div class="info-box warning">
                ${step.warning}
            </div>
        `;
    }

    // Timeline
    if (step.timeline) {
        html += `
            <div class="timeline">
                ${step.timeline.map((item, index) => `
                    <div class="timeline-item">
                        <strong>${index + 1}.</strong> ${item}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Next Steps (para el paso final)
    if (step.nextSteps) {
        html += `
            <div class="info-box info" style="margin-top: 30px;">
                <strong>🌟 ¿Y ahora qué?</strong>
                <ul style="margin-top: 10px; margin-left: 20px;">
                    ${step.nextSteps.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Actions
    if (step.actionType === 'continue') {
        html += `
            <div class="actions">
                <button class="btn btn-success" onclick="completeStep(${step.id})">
                    ${step.actionText}
                </button>
            </div>
        `;
    } else if (step.actionType === 'decision') {
        html += `
            <div class="step-description" style="margin-top: 20px;">
                <strong>¿Qué resultado obtuviste?</strong>
            </div>
            <div class="decision-buttons">
                ${step.decisions.map(dec => `
                    <div class="decision-btn ${dec.type}" onclick="handleDecision(${dec.nextStep})">
                        <h3>${dec.text}</h3>
                        <p>${dec.subtitle}</p>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (step.actionType === 'final') {
        html += `
            <div style="text-align: center; margin-top: 40px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; color: white;">
                <h3 style="margin-bottom: 15px;">Has completado exitosamente el proceso</h3>
                <p style="font-size: 1.2em;">Tu esfuerzo, dedicación y perseverancia han dado frutos.</p>
                <p style="font-size: 1.1em; margin-top: 15px;">¡Mucho éxito en tu carrera profesional!</p>
            </div>
        `;
    }

    html += `</div>`;

    contentArea.innerHTML = html;
}

// Actualizar barra de progreso
function updateProgress() {
    const totalSteps = 9;
    const progress = (completedSteps.size / totalSteps) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Ir a un paso específico
function goToStep(stepNumber) {
    currentStep = stepNumber;
    renderSidebar();
    renderContent();

    // Scroll to top
    document.getElementById('contentArea').scrollTo(0, 0);
}

// Completar paso y avanzar
function completeStep(stepNumber) {
    completedSteps.add(stepNumber);
    updateProgress();

    // Ir al siguiente paso
    if (stepNumber < 9) {
        goToStep(stepNumber + 1);
    }
}

// Manejar decisiones
function handleDecision(nextStep) {
    if (nextStep === null) {
        alert('Debes realizar las acciones indicadas antes de continuar.');
        return;
    }

    completedSteps.add(currentStep);
    updateProgress();
    goToStep(nextStep);
}

// Reiniciar proceso
function resetProcess() {
    if (confirm('¿Estás seguro de que quieres reiniciar el proceso? Se perderá tu progreso actual.')) {
        completedSteps.clear();
        currentStep = 1;
        updateProgress();
        goToStep(1);
    }
}

// Event listeners
function setupEventListeners() {
    // Click en items del sidebar
    document.getElementById('sidebar').addEventListener('click', function(e) {
        const stepItem = e.target.closest('.step-item');
        if (stepItem) {
            const stepId = parseInt(stepItem.dataset.step);
            goToStep(stepId);
        }
    });

    // Botón de reinicio
    document.getElementById('resetBtn').addEventListener('click', resetProcess);
}
