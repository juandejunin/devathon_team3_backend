import { RoomModel } from '../models/room.model';
import { CreateUserServicio } from './user.service';

export class CreateRoomService {
  async execute(roomName: string, userName: string): Promise<any> {
    try {
      const room = new RoomModel({ roomName });
      const savedRoom = await room.save();
      let roomId = savedRoom._id;
      const createUserServicio = new CreateUserServicio();
      await createUserServicio.execute(userName, roomId);
      const updatedRoom = await RoomModel.findById(roomId);
      return updatedRoom;
    } catch (error) {
      throw new Error('Error al crear la sala: ' + error.message);
    }
  }
}
