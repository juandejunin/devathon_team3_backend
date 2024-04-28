import express, { Application, NextFunction, Request, Response } from 'express';

import SomethingRouter from './presentation/routes';
import RoomRoutes from './presentation/room.routes';

import { RoomModel } from './models/room.model';
class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.mountRoutes();
    this.mountErrorHandlers();
    // this.checkIndexes();
  }

  middlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
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

  // async checkIndexes() {
  //   try {
  //     // Obtener los índices de la colección de salas
  //     const indexes = await RoomModel.collection.getIndexes();
  //     console.log('Indexes:', indexes);
  //   } catch (error) {
  //     console.error('Error al obtener los índices de la colección de salas:', error);
  //   }
  // }
}

export default new App().expressApp;
