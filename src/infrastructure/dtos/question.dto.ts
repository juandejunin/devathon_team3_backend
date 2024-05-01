import { Question } from '../../domain/question';
import questionEntity, { QuestionEntity } from '../entities/question.entity';

export class QuestionDto {
  static fromDomainToData(something: Question): QuestionEntity {
    const somethingEntity = new questionEntity();
    somethingEntity._id = something.properties.questionId;
    somethingEntity.title = something.properties.title;
    somethingEntity.alternatives = something.properties.alternatives;

    return somethingEntity;
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
