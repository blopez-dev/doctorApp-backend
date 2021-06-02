import { Router } from 'express';
import {signIn } from '../controller';

const routes = Router();

routes
  .route('/')
  .post(signIn);

export default app => app.use('/auth', routes);
