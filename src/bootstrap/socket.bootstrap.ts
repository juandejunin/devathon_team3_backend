import { Socket, Server as SocketIOServer } from 'socket.io';
import { GetGameQuestions } from '../application/question';
import { QuestionInfrastructure } from '../infrastructure/question.infrastructure';
import { TInitialize } from './bootstrap.interface';

export class SocketBootstrap {
  constructor() {}

  async initialize(server: TInitialize): Promise<void> {
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

      io.on('connection', async (socket: Socket) => {
        console.log('Un cliente se ha conectado');

        socket.on('joinGroup', async (groupId: string) => {
          socket.join(groupId);
          console.log(`Cliente se ha unido al grupo: ${groupId}`);

          // Crear una instancia de QuestionRepository y pasarla a GetGameQuestions
          const repository = new QuestionInfrastructure();
          const getQuestions = new GetGameQuestions(repository);
          const questions = await getQuestions.execute();
          console.log(questions);

          socket.emit('questions', questions);
        });

        socket.on('disconnect', (roomId) => {
          console.log('Cliente desconectado');
          socket.leave(roomId);
        });
      });
    } catch (error) {
      console.log('Error occurred during socket initialization:', error);
      throw error;
    }
  }
}
