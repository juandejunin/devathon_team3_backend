# Backend de Aplicación de Preguntas y Respuestas

Este es el repositorio backend para una aplicación de preguntas y respuestas, desarrollado en Node.js con TypeScript y utilizando socket.io para la comunicación en tiempo real.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- Docker: [Descargar Docker](https://www.docker.com/get-started)

## Instrucciones de Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el Repositorio

```
git clone https://github.com/juandejunin/devathon_team3_backend.git 
```
### 2. Instalar dependencias

```
cd devathon_team3_backend
```

```
npm install
```
### 3. Crear archivo .env
Crea un archivo .env en la raíz del proyecto, utilizando como referencia el archivo .env-example.txt proporcionado.

Aquí tienes un ejemplo de configuración para el archivo .env:

```
MONGO_DB_USERNAME=user
MONGO_DB_PASSWORD=password
MONGO_DB_HOST=host
MONGO_DB_PORT=port

```

### 4. Iniciar Servicio de Docker Compose
Asegúrate de tener Docker Compose instalado en tu sistema. Luego, ejecuta el siguiente comando para iniciar los servicios necesarios:


```
docker-compose up -d
```
### 5. Iniciar en Modo Desarrollo

Una vez que los servicios de Docker estén en funcionamiento, puedes iniciar el servidor en modo desarrollo con el siguiente comando:

```
npm run dev
```


