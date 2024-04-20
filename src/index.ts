import express from 'express';
import http from 'http';
import { Socket, Server as SocketIOServer } from 'socket.io';
import { connectDB } from './db/db';

const app = express();
const server = http.createServer(app);
const PORT = 8000;

const io = new SocketIOServer(server);

app.get('/', (req: Request, res: Response | any) => {
  console.log('Se ha recibido una solicitud GET en la ruta /');
  res.send('¡Hola desde Express!');
});

app.use((err: Error | any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

server.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

connectDB();

io.on('connection', (socket: Socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('mensaje', (data: any) => {
    console.log('Mensaje recibido:', data);
  });
  socket.emit('bienvenida', '¡Bienvenido a la app de preguntas y respuestas!');
});

process.on('unhandledRejection', (err: unknown) => {
  console.error(err);
  server.close(() => process.exit(1));
});

module.exports = app.get('/', (req: Request, res: Response | any) => {
  console.log('Se ha recibido una solicitud GET en la ruta /');
  res.send('¡Hola desde Express!');
});
