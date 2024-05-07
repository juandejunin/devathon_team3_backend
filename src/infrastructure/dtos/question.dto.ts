import { Question } from '../../domain/question';
import questionEntity, { QuestionEntity } from '../entities/question.entity';

export class QuestionDto {
  static fromDomainToData(question: Question): QuestionEntity {
    const somethingEntity = new questionEntity();
    somethingEntity._id = question.properties.questionId;
    somethingEntity.title = question.properties.title;
    somethingEntity.alternatives = question.properties.alternatives;

    return somethingEntity;
  }

  static fromDomainToDataArray(questions: Question[]): QuestionEntity[] {
    return questions.map((item) => this.fromDomainToData(item));
  }

  static fromDataToDomain(
    entity: QuestionEntity | QuestionEntity[]
  ): Question | Question[] {
    if (Array.isArray(entity)) {
      return entity.map((item) => this.fromDataToDomain(item)) as Question[];
    }

    const something = new Question({
      questionId: entity._id,
      title: entity.title,
      alternatives: entity.alternatives
    });

    return something;
  }
}
