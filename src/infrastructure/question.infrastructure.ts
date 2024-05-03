import { Question } from '../domain/question';
import { IQuestionRepository } from '../domain/repositories/question.repository';
import { QuestionDto } from './dtos/question.dto';
import QuestionEntity from './entities/question.entity';

export class QuestionInfrastructure implements IQuestionRepository {
  async insertQuestions(questions: Question[]): Promise<Question[]> {
    try {
      const questionsData = QuestionDto.fromDomainToDataArray(questions);
      QuestionEntity.insertMany(questionsData);
      return questions;
    } catch (error) {
      console.error('Error inserting the questions:', error);
      throw error;
    }
  }

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
