import { SomethingRepository } from '../domain/repositories/something.repository';
import { Something } from '../domain/something';

export class SomethingSave {
  constructor(private readonly repository: SomethingRepository) {}

  async execute(something: Something): Promise<void> {
    return await this.repository.save(something);
  }
}
