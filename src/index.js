import express from 'express';
import Middlewares from './application/middlewares';
import Server from './application/server';
import { Connect } from '@Adapters/database';
import Seed from './common/seed';
import Controllers from './domain';

const app = express();

Connect(Seed).then(() => {
  Middlewares(app);
  Controllers(app);
  Server(app);
});
