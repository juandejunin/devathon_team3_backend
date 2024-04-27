import mongoose from 'mongoose';

import { Parameters } from '../parameters';
import { IBootstrap, TInitialize } from './bootstrap.interface';

export class DatabaseBootstrap implements IBootstrap {
  private static appConnection: mongoose.Connection;

  async initialize(): Promise<TInitialize> {
    const dbConfig = Parameters.dbConfig;
    console.log('dbConfig', dbConfig);

    const { host, port, database, username, password } = dbConfig;

    const uri = `mongodb://${username}:${password}@${host}:${port}/`;
   

    const connectionOptions: mongoose.ConnectOptions = {};

    const connection = await mongoose.connect(uri, connectionOptions);

    DatabaseBootstrap.appConnection = connection.connection;

    return true;
  }

  static getConnection(): mongoose.Connection {
    return DatabaseBootstrap.appConnection;
  }

  async close() {
    if (DatabaseBootstrap.appConnection) {
      await DatabaseBootstrap.appConnection.close();
    }
  }
}
