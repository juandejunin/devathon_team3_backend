import mongoose, { Document, Schema, Model } from 'mongoose';


interface RoomDocument extends Document {
  name: string;
  users: string[];
}


const RoomSchema = new Schema<RoomDocument>({
  name: { type: String, required: true },
  users: { type: [String], default: [] } 
});


const RoomModel: Model<RoomDocument> = mongoose.model<RoomDocument>('Room', RoomSchema);

export { RoomDocument, RoomModel };
