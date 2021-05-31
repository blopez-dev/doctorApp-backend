import express from 'express';
import Middlewares from './application/middlewares';
import Server from './application/server';
import { Connect } from './common/adapter/database';
import Controllers from './domain';

const app = express();

Connect().then(() => {
  Middlewares(app);
  Controllers(app);
  Server(app);
});
