import { Router } from 'express';
import { getAll } from '../controllers/index.js';

function router() {
  const routes = Router();

  routes
    .route('/')
    .get(getAll)


  routes
    .route('/:id')


  return routes;
}

export default app => app.use('/heroes', router());