import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/user';
import { UserDto } from './dtos/user.dto';
import UserEntity from './entities/user.entity';

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
    try {
      const usersData = await UserEntity.find({ roomId });
      const users = UserDto.fromDataToDomain(usersData) as User[];
      return users;
    } catch (error) {
      console.error('Error inserting the questions:', error);
      throw error;
    }
  }
}
