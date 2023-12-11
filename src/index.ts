
import express, { Express } from 'express';
import http from 'http';
import { useExpressServer } from 'routing-controllers';

import 'reflect-metadata';

import { RouteController } from './routes/RouteController';


const run = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const app: Express = useExpressServer(express(), {
    controllers: [
      RouteController,
    ],
  });

  const httpServer = http.createServer(app);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 9876 }, resolve),
  );

  console.info(`🚀 Server ready at http://localhost:${9876}`);
};

run();
