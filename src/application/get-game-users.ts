import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/user';

export class GetGameUsers {
  constructor(private readonly repository: UserRepository) {}

  async execute(roomId: string): Promise<User[]> {
    try {
      return await this.repository.getUsersByRoomId(roomId);
    } catch (error) {
      console.error('Error al sembrar datos de preguntas:', error);
      throw error;
    }
  }
}
