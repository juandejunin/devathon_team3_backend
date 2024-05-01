import app from './app';
import { DatabaseBootstrap } from './bootstrap/database.bootstrap';
import { ServerBootstrap } from './bootstrap/server.bootstrap';
import { SocketBootstrap } from './bootstrap/socket.bootstrap';

(async () => {
  const serverBootstrap = new ServerBootstrap(app);
  const socketBootstrap = new SocketBootstrap();
  const databaseBootstrap = new DatabaseBootstrap();

  try {
    const [server, database] = await Promise.all([
      serverBootstrap.initialize(),
      databaseBootstrap.initialize()
    ]);

    socketBootstrap.initialize(server);

    console.log('Server and database are running');
  } catch (err) {
    console.error('Error occurred during initialization:', err);
    await databaseBootstrap.close();
    process.exit(1);
  }
})();
