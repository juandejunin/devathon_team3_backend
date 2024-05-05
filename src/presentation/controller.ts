import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { SomethingSave } from '../application';
import { ControllerBase } from './controller-base';

export class SomethingController extends ControllerBase {
  constructor(private readonly createSave: SomethingSave) {
    super();
  }

  async create(req: Request, res: Response) {
    const somethingId = uuidv4();
    res.json({ somethingId });
  }
}
