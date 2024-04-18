import express from 'express';
import { DatabaseBootstrap } from './bootstrap/database.bootstrap';
import { ServerBootstrap } from './bootstrap/server.bootstrap';

const app = express();

(async () => {
  const serverBootstrap = new ServerBootstrap(app);
  const databaseBootstrap = new DatabaseBootstrap();

  try {
    await Promise.all([
      serverBootstrap.initialize(),
      databaseBootstrap.initialize()
    ]);

    console.log('Server and database are running');
  } catch (err) {
    console.error('Error occurred during initialization:', err);
    await databaseBootstrap.close();
    process.exit(1);
  }
})();
