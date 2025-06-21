# TP3 - Swiss Medical | Sistema de Gestión de Turnos Médicos

## 📌 Descripción

Este proyecto consiste en una aplicación web para la gestión eficiente de turnos y pacientes dentro del entorno clínico. Desarrollado con tecnologías modernas del ecosistema Node.js, permite administrar usuarios, crear turnos, editar información de pacientes y mucho más.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- EJS (Embedded JavaScript Templates)

## ⚙️ Instalación

1. Cloná este repositorio o descargá el archivo ZIP.
2. Instalá las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Creá un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```
   PORT=3001
   JWT_SECRET=secreto
   ```

4. Iniciá el servidor:

   ```bash
   npm start
   ```

## 🧪 API - Endpoints disponibles


### 📅 Turnos

- **GET** `/api/v1/turnos/:idPaciente` — Listado de turnos por paciente.
- **POST** `/api/v1/turnos` — Crear un nuevo turno (**requiere token**).
- **DELETE** `/api/v1/turnos/:idTurno` — Eliminar un turno.


## 🌐 Rutas del sitio web

- `/` — Página de inicio.
- `/turnos` — Listado general de turnos.
- `/turnos/new` — Formulario para crear un nuevo turno.
- `/turnos/update/:id` — Edición de turnos existentes.
- `/pacientes` — Vista general de pacientes registrados.
- `/pacientes/update/:id` — Edición de datos del paciente.

## 👥 Integrantes

- Ramiro Cutropia
- Geminiani Jeremias
- Pablo Vitadini
- Fu Te Ho
