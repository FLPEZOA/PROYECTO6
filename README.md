# API de Gestión de Usuarios y Productos

Esta aplicación es una API RESTful que permite gestionar usuarios y productos. La aplicación está construida utilizando Node.js y Express para proporcionar un entorno de desarrollo eficiente, y MongoDB como base de datos para el almacenamiento de datos. Además, se implementa JWT (JSON Web Token) para la autenticación.

## Características

- Registro de usuarios con autenticación mediante JWT.
- Inicio de sesión y generación de token.
- Actualización de información de perfil de usuario.
- Eliminación de usuarios.
- Gestión de productos con operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
- Rutas protegidas que requieren autenticación.

## Tecnologías Utilizadas

### Prerrequisitos o Dependencias

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- **Sistema Operativo:** Windows 10/11; macOS 10.14 o superior; Ubuntu 18.04 o superior en el caso de Linux.
- **Node.js:** Entorno de ejecución de JavaScript en el servidor.
- **Express:** Framework de aplicación web para Node.js.
- **MongoDB:** Base de datos NoSQL.
- **Mongoose:** ODM (Object Document Mapper) para MongoDB.
- **jsonwebtoken:** Biblioteca para implementar JWT.
- **bcryptjs:** Biblioteca para cifrar contraseñas.
- **cors:** Middleware para habilitar CORS.

## Instalación del Proyecto

### Paso 1: Instalar Node.js

Descarga el instalador:
- Ve a [nodejs.org](https://nodejs.org). 
- Descarga la versión LTS (Long Term Support).

Instala Node.js:
- Sigue el asistente de instalación. 
- Asegúrate de marcar la opción para agregar Node.js a tu PATH.

Verificar la instalación:
- Abre tu terminal y ejecuta:
  ```bash
  node -v
  npm -v
Deberías ver las versiones de Node.js y npm instaladas.
Paso 2: Clonar o Descargar el Proyecto
Desde tu terminal, clona el repositorio o descarga los archivos, y navega al directorio del proyecto:

bash

git clone <url_del_repositorio>
cd nombre_del_proyecto
Paso 3: Instalar Dependencias
Puedes instalar todas las dependencias ejecutando el siguiente comando en la raíz del proyecto:

bash

npm install
Paso 4: Configurar el Archivo .env
Crea un archivo .env en la raíz del proyecto. Puedes usar el siguiente formato como base:

plaintext

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority
JWT_SECRET=mi_secreto_jwt
Asegúrate de reemplazar <username> y <password> con tus credenciales de MongoDB.

Paso 5: Ejecutar la Aplicación
Iniciar el servidor local:
Ejecuta el siguiente comando para iniciar tu aplicación:

bash

npm run dev   # Usando nodemon (recomendado para desarrollo)
Abrir en el navegador:
La API no tiene una interfaz gráfica, pero puedes probar los endpoints utilizando Postman en:

Documentación de API: Accede a la documentación de la API a través del endpoint correspondiente (puedes integrar Swagger si lo tienes configurado).
Paso 6: Estructura de Archivos
Asegúrate de que tu estructura de archivos sea algo así:

text

ejemplo-tu-proyecto/
├─ node_modules/
├─ .env
├─ .gitignore
├─ package.json
├─ server.js
├─ routes/
│  ├─ userRoutes.js
│  └─ productRoutes.js
├─ controllers/
│  ├─ userController.js
│  └─ productController.js
├─ models/
│  ├─ userModel.js
│  └─ productModel.js
├─ middleware/
│  └─ auth.js
└─ README.md

#Instrucciones para Ejecutar el Proyecto
Abre la Terminal:

Abre tu terminal o línea de comandos (Command Prompt, PowerShell en Windows, Terminal en macOS o cualquier terminal en Linux).

Navega al Directorio del Proyecto:

Usa el comando cd para cambiar al directorio de tu proyecto. Por ejemplo, si tu proyecto se llama ejemplo-tu-proyecto y está en tu escritorio, el comando sería:

bash

cd ruta/a/tu/proyecto/ejemplo-tu-proyecto


3. Iniciar el Servidor de Desarrollo:

   Una vez que estés en el directorio correcto, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   Esto ejecutará el script configurado para tu aplicación, que inicia el servidor.

Ver la API en Acción:

Abre Postman (o cualquier cliente API que prefieras) y prueba los siguientes endpoints:

Registrar Usuario: POST http://localhost:5000/api/user/register
Iniciar Sesión: POST http://localhost:5000/api/user/login
Verificar Token: GET http://localhost:5000/api/user/verifytoken
Actualizar Usuario: PUT http://localhost:5000/api/user/update
Eliminar Usuario: DELETE http://localhost:5000/api/user/delete/:id
Crear Producto: POST http://localhost:5000/api/product/create
Leer Todos los Productos: GET http://localhost:5000/api/product/readall
Leer un Producto Específico: GET http://localhost:5000/api/product/readone/:id
Actualizar Producto: PUT http://localhost:5000/api/product/update/:id
Eliminar Producto: DELETE http://localhost:5000/api/product/delete/:id
Verifica que la Aplicación Funcione:

Asegúrate de que todas las rutas funcionan como se espera. Si has configurado todo correctamente, deberías poder gestionar usuarios y productos sin inconvenientes.

Solucionar Problemas Comunes
Si algo no funciona como se espera, aquí hay algunos pasos de solución de problemas comunes:

Errores de Consola:
Verifica la consola del servidor para ver si hay mensajes de error. También puedes abrir las herramientas de desarrollador en tu navegador (F12) para ver si hay errores de red o de JavaScript.

Problemas de Autenticación:
Si recibes un error "Token no válido" o "Acceso denegado", asegúrate de que estás enviando el token JWT correctamente en el encabezado de autorización:

Formato Correcto: Authorization: Bearer <tu_token_jwt>
Problemas de CORS:
Si la API no responde o muestra problemas relacionados con CORS, asegúrate de que tu servidor está configurado para permitir solicitudes de diferentes orígenes.

Estado de Instalación:
Si obtienes un error al ejecutar npm run dev, asegúrate de haber ejecutado npm install primero para instalar todas las dependencias necesarias.

Detener el Servidor de Desarrollo
Si deseas detener el servidor de desarrollo mientras estás en la terminal, simplemente presiona Ctrl + C.



### Cómo Usar Este README

Este README proporciona una guía completa para la configuración y uso de tu API de gestión de usuarios y productos. Asegúrate de que sea claro y accesible para cualquier desarrollador que quiera configurar y probar tu proyecto. Puedes modificar cualquier parte de este contenido para que se ajuste mejor a tu proyecto y necesidades. 



