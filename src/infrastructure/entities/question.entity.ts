import mongoose, { Document, Schema } from 'mongoose';
import { Alternative } from '../../domain/alternative';

export interface IQuestionDocument extends Document {
  _id: string;
  title: string;
  alternatives: Alternative[];
}

const QuestionSchema: Schema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  alternatives: { type: Array, required: true }
});

export default mongoose.model<IQuestionDocument>('Question', QuestionSchema);

export type QuestionEntity = IQuestionDocument;
