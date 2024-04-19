import { Application } from 'express';
import http from 'http';

import { Parameters } from '../parameters';
import { IBootstrap, TInitialize } from './bootstrap.interface';

export class ServerBootstrap implements IBootstrap {
  constructor(private readonly app: Application) {}

  initialize(): Promise<TInitialize> {
    const promise = new Promise((resolve, reject) => {
      const server = http.createServer(this.app);

      const port = Parameters.port;

      server
        .listen(port)
        .on('listening', () => {
          console.log(`Server is listening on port ${port}`);
          resolve(server);
        })
        .on('error', (err) => {
          reject(err);
        });
    });

    return promise as Promise<boolean | Error>;
  }
}
