import { Question } from '../question';

export interface IQuestionRepository {
  getGameQuestions(): Promise<Question[]>;
}
