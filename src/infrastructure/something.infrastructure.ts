import { SomethingRepository } from '../domain/repositories/something.repository';
import { Something } from '../domain/something';

export class SomethingInfrastructure implements SomethingRepository {
  getAll(): Promise<Something[]> {
    throw new Error('Method not implemented.');
  }
  getById(entityId: string): Promise<Something> {
    throw new Error('Method not implemented.');
  }
  getPaginated(page: number, pageSize: number): Promise<Something[]> {
    throw new Error('Method not implemented.');
  }
  async save(something: Something) {
    // const repository =
    //   DatabaseBootstrap.getDataSource().getRepository(SomethingEntity);
    // const somethingEntity = somethingDto.fromDomainToData(something);
    // await repository.save(somethingEntity);
    throw new Error('Method not implemented.');
  }
}
