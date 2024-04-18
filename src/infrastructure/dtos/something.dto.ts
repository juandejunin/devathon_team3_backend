import { Something } from '../../domain/something';
import { SomethingEntity } from '../entities/something.entity';

export class SomethingDto {
  static fromDomainToData(something: Something): SomethingEntity {
    const somethingEntity = new SomethingEntity();
    somethingEntity.somethingId = something.properties.somethingId;
    somethingEntity.title = something.properties.title;

    return somethingEntity;
  }

  static fromDataToDomain(
    entity: SomethingEntity | SomethingEntity[]
  ): Something | Something[] {
    if (Array.isArray(entity)) {
      return entity.map((item) => this.fromDataToDomain(item)) as Something[];
    }

    const something = new Something({
      somethingId: entity.somethingId,
      title: entity.title
    });

    return something;
  }
}
