import UserService from '../services';

export const getAll = async (req, res) => {
  const users = await UserService().getAll();
  res.json(users);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const user = await UserService().create(body);
  res.json(user);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const user = await UserService().getById(id);
  res.json(user);
}

export const updateById = async (req, res) => {
  const { params: { id } } = req;
  const user = await UserService().updateById(id);
  res.json(user);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await UserService().deleteById(id);
  res.status(200).send();
}
