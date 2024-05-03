import { Question } from '../domain/question';
import { IQuestionRepository } from '../domain/repositories/question.repository';

export class GetGameQuestions {
  constructor(private readonly repository: IQuestionRepository) {}

  async execute(): Promise<Question[]> {
    return await this.repository.getGameQuestions();
  }
}
