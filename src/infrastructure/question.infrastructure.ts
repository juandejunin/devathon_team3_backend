import { Question } from '../domain/question';
import { IQuestionRepository } from '../domain/repositories/question.repository';
import { QuestionDto } from './dtos/question.dto';
import QuestionEntity from './entities/question.entity';

export class QuestionInfrastructure implements IQuestionRepository {
  async getGameQuestions(): Promise<Question[]> {
    try {
      const questionDocuments = await QuestionEntity.find();
      const questions = QuestionDto.fromDataToDomain(
        questionDocuments
      ) as Question[];

      return questions;
    } catch (error) {
      console.error('Error getting the questions:', error);
      throw error;
    }
  }
}
