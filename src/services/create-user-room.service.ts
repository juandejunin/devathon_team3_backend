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

    // Crear y guardar el usuario
    const user = new User({ userId, name: userName, points, responseTime });
    await this.userRepository.save(user);

    // Crear la sala
    const room = new Room({ roomId, name: roomName });

    // Obtener la sala recién creada
    const savedRoom = await this.roomRepository.save(room);
    console.log(savedRoom)

    // Agregar el ID del usuario a la lista de usuarios de la sala
    room.addUser(userId);

    // Actualizar la sala en la base de datos con la nueva lista de usuarios
    await this.roomRepository.save(room);
    return { userId, roomId };
  }
}
