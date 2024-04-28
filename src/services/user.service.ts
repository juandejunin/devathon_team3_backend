import { UserModel } from '../models/user.models';
import { Types } from 'mongoose';
import { RoomModel } from '../models/room.model';

export class CreateUserServicio {
  async execute(name: string, roomId: Types.ObjectId): Promise<any> {
    try {
      const user = new UserModel({ name, room: roomId });
      const userSave = await user.save();
      await RoomModel.updateOne(
        { _id: roomId },
        { $push: { users: userSave._id } }
      );
      return user;
    } catch (error) {
      throw new Error('Error al crear el usuario: ' + error.message);
    }
  }
}
