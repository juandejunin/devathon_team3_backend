import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { SomethingSave } from '../application';
import { ControllerBase } from './controller-base';

export class SomethingController extends ControllerBase {
  constructor(private readonly createSave: SomethingSave) {
    super();
  }

  async create(req: Request, res: Response) {
    // const errors = await this.validateParameters(CreateSomethingModel, req.body);
    // if (errors) {
    //   return res.status(400).json(errors);
    // }
    const somethingId = uuidv4();
    // const props: CreateSomethingModel = {
    //   ...
    // };
    // const something = new CreateSomething(props);
    // const valueReturned = await this.createSave.execute(something);
    // res.json(valueReturned);
    res.json({ somethingId });
  }
}
