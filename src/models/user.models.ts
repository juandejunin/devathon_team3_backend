import mongoose, { Schema, Document, Types } from 'mongoose';
import { RoomDocument } from './room.model';

interface UserDocument extends Document {
  name: string;
  points: number;
  gameTime: number;
  room: Types.ObjectId | RoomDocument;
}

const userSchema: Schema<UserDocument> = new Schema({
  name: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  gameTime: {
    type: Number,
    default: 0
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  }
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
