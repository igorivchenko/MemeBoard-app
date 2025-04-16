import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VAR } from './constants/index.js';
import memesRouter from './routers/index.js';

const PORT = +getEnvVar(ENV_VAR.MONGODB_PORT, 3000);

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use('/memes', memesRouter);

  app.use(errorHandler);
  app.use(notFoundHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
