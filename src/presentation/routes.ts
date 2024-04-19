import { Router } from 'express';

import { SomethingSave } from '../application';
import { SomethingRepository } from '../domain/repositories/something.repository';
import { SomethingInfrastructure } from '../infrastructure/something.infrastructure';
import { SomethingController } from './controller';

export class SomethingRoute {
  readonly router: Router;

  constructor(private readonly controller: SomethingController) {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', this.controller.create.bind(this.controller));
  }
}

const somethingRepository: SomethingRepository = new SomethingInfrastructure();

const somethingSave = new SomethingSave(somethingRepository);

const controller = new SomethingController(somethingSave);

export default new SomethingRoute(controller).router;
