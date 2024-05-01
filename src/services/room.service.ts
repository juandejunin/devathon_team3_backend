import { RoomModel } from '../models/room.model';
import { CreateUserService } from './user.service';
import mongoose from 'mongoose';

export class CreateRoomService {
  async execute(roomName: string, userName: string): Promise<any> {
    try {
      const room = new RoomModel({ roomName });
      const savedRoom = await room.save();
      let roomId = savedRoom._id;
      const createUserService = new CreateUserService();
      await createUserService.execute(userName, roomId);
      const updatedRoom = await RoomModel.findById(roomId);
      return updatedRoom;
    } catch (error) {
      throw new Error('Error creating room: ' + error.message);
    }
  }
}

export class JoinRoomService {
  async execute(roomId: string, userName: string): Promise<any> {
    try {
      const roomIdObject = new mongoose.Types.ObjectId(roomId);      
      const existingRoom = await RoomModel.findById(roomIdObject);
      if (!existingRoom) {
        throw new Error('The room does not exist.');
      }      
      if (existingRoom.users.length >= 4) {
        throw new Error('The room is full.');
      }
      const createUserService = new CreateUserService();
      let user = await createUserService.execute(userName, roomIdObject);
      const roomUpdated = await RoomModel.findById(roomIdObject);
      return roomUpdated
    } catch (error) {
      throw new Error('Error joining room: ' + error.message);
    }
  }
}
