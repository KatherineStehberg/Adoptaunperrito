# Adopta un Perrito

¡Bienvenido al proyecto **Adopta un Perrito**! Este repositorio está diseñado para facilitar la adopción responsable de mascotas. La plataforma conecta a adoptantes con refugios y dueños que buscan un nuevo hogar para sus perros, promoviendo el bienestar animal y la tenencia responsable.

## Características principales

- **Autenticación de usuarios**: Registro e inicio de sesión seguro.
- **Búsqueda de mascotas**: Filtra por raza, tamaño, edad, y ubicación.
- **Panel de usuario**: Permite gestionar solicitudes de adopción y perfiles de mascotas.
- **Información educativa**: Sección dedicada a consejos sobre la adopción responsable y cuidado de mascotas.
- **Diseño responsivo**: Compatible con dispositivos móviles y escritorio.

## Tecnologías utilizadas

### Frontend
- **React**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera.
- **Axios**: Para manejar solicitudes HTTP.
- **CSS3**: Para el diseño y estilo de la aplicación.

### Backend
- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework web para manejar rutas y middleware.
- **MongoDB**: Base de datos NoSQL para almacenar información sobre usuarios y mascotas.
- **jsonwebtoken**: Para la autenticación basada en tokens.

## Estructura del proyecto

```
Adoptaunperrito/
├── frontend/
│   ├── src/
│   │   ├── components/  # Componentes de React
│   │   ├── pages/       # Páginas principales
│   │   ├── App.jsx      # Componente principal
│   │   └── styles.css   # Estilos generales
├── backend/
│   ├── server.js        # Archivo principal del servidor
│   ├── routes/          # Rutas de la API
│   ├── controllers/     # Controladores
│   ├── models/          # Modelos de base de datos
│   └── config/          # Configuración de la base de datos
├── .env                 # Variables de entorno
├── package.json         # Configuración de dependencias
└── README.md            # Documentación del proyecto
```

## Instalación y configuración

### Requisitos previos

1. Node.js (v18 o superior).
2. MongoDB.
3. Git.

### Pasos para la instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/KatherineStehberg/Adoptaunperrito.git
   cd Adoptaunperrito
   ```

2. Configura las variables de entorno en un archivo `.env`:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/adoptaunperrito
   JWT_SECRET=clave_secreta
   ```

3. Instala las dependencias del frontend y backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Inicia el servidor y el cliente:

   **Backend:**
   ```bash
   npm start
   ```

   **Frontend:**
   ```bash
   cd ../frontend
   npm run dev
   ```

5. Accede a la aplicación en tu navegador:

   ```
   http://localhost:5173
   ```

## Contribuciones

Si deseas contribuir, por favor crea un *fork* del repositorio, realiza tus cambios en una rama nueva y envía un *pull request*. ¡Las sugerencias y mejoras siempre son bienvenidas!

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por apoyar la adopción responsable y ayudar a crear un mundo mejor para nuestras mascotas! 🐾
