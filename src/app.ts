import express, { Application, NextFunction, Request, Response } from 'express';
import SomethingRouter from './presentation/routes';
import RoomRoutes from './presentation/room.routes';

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
    this.expressApp.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
      );
      next();
    });
  }

  mountRoutes() {
    this.expressApp.use('/something', SomethingRouter);
    this.expressApp.use('/api/v1/room', RoomRoutes);
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
