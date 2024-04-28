import { User } from '../domain/user';
import { UserRepository } from '../domain/repositories/user.repository';

export class UserInfrastructure implements UserRepository {
  async save(user: User): Promise<void> {
    console.log('Saving user:', user);
  }

  async getAll(): Promise<User[]> {
    return [];
  }

  async getById(userId: string): Promise<User> {
    return {} as User;
  }

  async getUsersByRoomId(roomId: string): Promise<User[]> {
    return [];
  }
}
