import { User } from '../user';

export interface UserRepository {
  getUsersByRoomId(roomId: string): Promise<User[]>;
  save(user: User): Promise<void>;
  getAll(): Promise<User[]>;
  getById(userId: string): Promise<User>;
}
