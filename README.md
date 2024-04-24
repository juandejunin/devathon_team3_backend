# Question and answer application backend

This is the backend repository for a question and answer application, developed in Node.js with TypeScript and using socket.io for real-time communication.

## Prerequisites

Before getting started, make sure you have the following requirements installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- Docker: [Download Docker](https://www.docker.com/get-started)

## Configuration instructions

Follow these steps to set up and run the project in your local environment:

### 1. Clone the repository
```
git clone https://github.com/juandejunin/devathon_team3_backend.git 
```

### 2. Install dependencies

```
cd devathon_team3_backend
```

### 3. Create .env file

Create a .env file in the root of the project, using the provided .env-example.txt file as a reference.

Here's an example configuration for the .env file:

MONGO_DB_USERNAME=user
MONGO_DB_PASSWORD=password
MONGO_DB_HOST=host
MONGO_DB_PORT=port


### 4. Start docker compose service

Ensure you have Docker Compose installed on your system. Then, run the following command to start the necessary services:

```
docker-compose up -d
```


### 5. Start in development mode

Once the Docker services are up and running, you can start the server in development mode with the following command:

```
npm run dev
```



# Backend de aplicación de preguntas y respuestas

Este es el repositorio backend para una aplicación de preguntas y respuestas, desarrollado en Node.js con TypeScript y utilizando socket.io para la comunicación en tiempo real.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- Docker: [Descargar Docker](https://www.docker.com/get-started)

## Instrucciones de configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

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

### 4. Iniciar servicio de docker compose
Asegúrate de tener Docker Compose instalado en tu sistema. Luego, ejecuta el siguiente comando para iniciar los servicios necesarios:


```
docker-compose up -d
```
### 5. Iniciar en modo desarrollo

Una vez que los servicios de Docker estén en funcionamiento, puedes iniciar el servidor en modo desarrollo con el siguiente comando:

```
npm run dev
```


