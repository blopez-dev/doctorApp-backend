import { Router } from 'express';
import { getAll, createOne, getById, updateById, deleteById } from '../controller';

const routes = Router();

routes
  .route('/')
  .get(getAll)
  .post(createOne);

routes
  .route('/:id')
  .get(getById)
  .put(updateById)
  .delete(deleteById);

export default app => app.use('/clinical-hsitories', routes);
