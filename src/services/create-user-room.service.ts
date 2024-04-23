import { v4 as uuidv4 } from 'uuid';
import { User } from '../domain/user';
import { Room } from '../domain/room';
import { UserRepository } from '../domain/repositories/user.repository';
import { RoomRepository } from '../domain/repositories/room.repository';

export class CreateUserRoomService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roomRepository: RoomRepository
  ) {}

  async execute(userName: string, points: number, responseTime: number, roomName: string): Promise<{ userId: string, roomId: string }> {
    const userId = uuidv4();
    const roomId = uuidv4();

    const user = new User({ userId, name: userName, points, responseTime });
    await this.userRepository.save(user);

    const room = new Room({ roomId, name: roomName });
    await this.roomRepository.save(room);

    return { userId, roomId };
  }
}



