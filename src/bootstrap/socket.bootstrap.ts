import { Socket, Server as SocketIOServer } from 'socket.io';
import { GetGameQuestions } from '../application/get-game-questions';
import { GetGameUsers } from '../application/get-game-users';
import { QuestionInfrastructure } from '../infrastructure/question.infrastructure';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
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

      const repository = new QuestionInfrastructure();
      const userRepository = new UserInfrastructure();
      io.on('connection', async (socket: Socket) => {
        console.log('Un cliente se ha conectado');

        socket.on('joinGroup', async (groupId: string) => {
          socket.join(groupId);
          console.log(`Cliente se ha unido al grupo: ${groupId}`);

          const getQuestions = new GetGameQuestions(repository);
          const getUsers = new GetGameUsers(userRepository);

          const questions = await getQuestions.execute();
          const users = await getUsers.execute(groupId);
          console.log(JSON.stringify(questions, null, 2));

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
