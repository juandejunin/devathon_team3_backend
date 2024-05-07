import mongoose, { Document, Schema } from 'mongoose';

export interface IUserDocument extends Document {
  _id: string;
  name: string;
  points: number;
  responseTime: number;
}

const UserSchema: Schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  points: { type: Number, required: true },
  responseTime: { type: Number, required: true }
});

export default mongoose.model<IUserDocument>('User', UserSchema);

export type UserEntity = IUserDocument;
