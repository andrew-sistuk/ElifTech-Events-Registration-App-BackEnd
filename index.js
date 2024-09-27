import { initMongoDB } from './src/db/initMongoDB.js';
import startServer from './src/server.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

await bootstrap();
