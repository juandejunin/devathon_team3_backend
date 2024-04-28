
import { Schema, model, Document, Types } from 'mongoose';

export interface RoomDocument extends Document {
  roomName: string;
  users: string[]; 
}

const roomSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  roomName: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }] 
});

export const RoomModel = model('Room', roomSchema);

