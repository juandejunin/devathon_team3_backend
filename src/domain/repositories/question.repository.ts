import { Question } from '../question';

export interface IQuestionRepository {
  getGameQuestions(): Promise<Question[]>;
  insertQuestions(questions: Question[]): Promise<Question[]>;
}
