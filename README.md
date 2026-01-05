# 🎓 Proceso de Tesis Interactivo

Aplicación web interactiva para navegar el proceso completo de una tesis de maestría en Ciberdefensa.

## 📋 Descripción

Esta aplicación web permite a los estudiantes de maestría navegar de forma interactiva por todas las etapas del proceso de tesis, desde la inscripción hasta la defensa final.

## ✨ Características

- **Interfaz Interactiva**: Navegación paso a paso por todo el proceso
- **Seguimiento de Progreso**: Barra de progreso visual
- **Información Detallada**: Cada paso incluye descripción, requisitos y documentación necesaria
- **Diseño Responsivo**: Funciona en dispositivos móviles y escritorio
- **Reinicio de Progreso**: Posibilidad de reiniciar el proceso en cualquier momento

## 🚀 Cómo Ejecutar el Proyecto Localmente

### Opción 1: Usando Python (Recomendado - Funciona en Windows, macOS y Linux)

#### Requisitos:
- Tener Python instalado (versión 3.x o 2.x)

#### Pasos:

1. **Descarga o clona el proyecto:**
   ```bash
   git clone https://github.com/MAXI8594/Proyecto_tesis.git
   cd proceso-tesis-interactivo
   ```

2. **Inicia el servidor web:**

   **Si tienes Python 3.x:**
   ```bash
   python -m http.server 8000
   ```

   **Si tienes Python 2.x:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Abre tu navegador y visita:**
   ```
   http://localhost:8000
   ```

4. **Para detener el servidor:**
   - Presiona `Ctrl + C` en la terminal

---

### Opción 2: Usando Node.js y http-server

#### Requisitos:
- Tener Node.js instalado

#### Pasos:

1. **Instala http-server globalmente (solo la primera vez):**
   ```bash
   npm install -g http-server
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd proceso-tesis-interactivo
   ```

3. **Inicia el servidor:**
   ```bash
   http-server -p 8000
   ```

4. **Abre tu navegador y visita:**
   ```
   http://localhost:8000
   ```

---

### Opción 3: Usando Live Server (VS Code)

#### Requisitos:
- Tener Visual Studio Code instalado

#### Pasos:

1. **Instala la extensión "Live Server":**
   - Abre VS Code
   - Ve a Extensiones (Ctrl+Shift+X)
   - Busca "Live Server" por Ritwick Dey
   - Haz clic en "Instalar"

2. **Abre el proyecto en VS Code:**
   ```bash
   code .
   ```

3. **Inicia Live Server:**
   - Haz clic derecho en `index.html`
   - Selecciona "Open with Live Server"
   - O presiona `Alt + L` seguido de `Alt + O`

4. **El navegador se abrirá automáticamente** en `http://127.0.0.1:5500`

---

### Opción 4: Abrir directamente en el navegador (Método Simple)

> ⚠️ **Nota:** Este método puede tener limitaciones con algunas funcionalidades debido a restricciones de seguridad del navegador (CORS).

#### Pasos:

1. **Navega a la carpeta del proyecto** en tu explorador de archivos

2. **Haz doble clic en `index.html`**

3. **La aplicación se abrirá en tu navegador predeterminado**

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estructura del Proyecto

```
proceso-tesis-interactivo/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos de la aplicación
├── js/
│   ├── data.js         # Datos del proceso de tesis
│   └── app.js          # Lógica de la aplicación
└── README.md           # Este archivo
```

## 🐛 Solución de Problemas

### El servidor no inicia
- **Verifica que el puerto 8000 no esté en uso** por otra aplicación
- Intenta usar otro puerto: `python -m http.server 8080`

### La página no carga correctamente
- **Asegúrate de estar en la carpeta correcta** del proyecto
- Verifica que todos los archivos (HTML, CSS, JS) estén presentes

### Error de CORS al abrir directamente
- **Usa una de las opciones con servidor local** (Opción 1, 2 o 3)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

---

**Desarrollado con ❤️ para estudiantes de Maestría en Ciberdefensa**
