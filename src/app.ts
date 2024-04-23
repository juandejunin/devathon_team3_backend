import express, { Application, NextFunction, Request, Response } from 'express';

import SomethingRouter from './presentation/routes';
import CreateUserRoomRoutes from './presentation/create-user-room.routes';

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.mountRoutes();
    this.mountErrorHandlers();
  }

  middlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
  }

  mountRoutes() {
    this.expressApp.use('/something', SomethingRouter);
    this.expressApp.use('/room', CreateUserRoomRoutes);;
  }

  mountErrorHandlers() {
    this.expressApp.use(
      '**',
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(404).send('Path not found');
      }
    );
  }
}

export default new App().expressApp;
