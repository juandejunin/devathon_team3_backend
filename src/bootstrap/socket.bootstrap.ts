import { Application } from 'express';

import { Socket, Server as SocketIOServer } from 'socket.io';
import { TInitialize } from './bootstrap.interface';

export class SocketBootstrap {
  constructor(private readonly app: Application) {}

  initialize(server: TInitialize): void {
    try {
      if (server instanceof Error) {
        throw server;
      }
      if (typeof server === 'string') {
        throw new Error(server);
      }
      if (typeof server === 'boolean') {
        throw new Error('Server is not initialized');
      }
      const io = new SocketIOServer(server);

      io.on('connection', (socket: Socket) => {
        console.log('Un cliente se ha conectado');

        socket.on('mensaje', (data: any) => {
          console.log('Mensaje recibido:', data);
        });

        socket.emit(
          'bienvenida',
          '¡Bienvenido a la app de preguntas y respuestas!'
        );
      });
    } catch (error) {
      console.log('Error occurred during socket initialization:', error);
      throw error;
    }
  }
}
