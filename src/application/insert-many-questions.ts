import { Question } from '../domain/question';
import { IQuestionRepository } from '../domain/repositories/question.repository';

export class GetGameQuestions {
  constructor(private readonly repository: IQuestionRepository) {}

  async execute(questionsToCreate: Question[]): Promise<void> {
    try {
      const existingQuestions = await this.repository.getGameQuestions();
      if (existingQuestions.length === 0) {
        await this.repository.insertQuestions(questionsToCreate);
        console.log('Datos de preguntas sembrados correctamente.');
      }
    } catch (error) {
      console.error('Error al sembrar datos de preguntas:', error);
      throw error;
    }
  }
}
