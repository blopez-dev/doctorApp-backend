import UserService from '../services';

export const getAll = async (req, res) => {
  const users = await UserService().getAll();
  res.json(users);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const hero = await UserService().create(body);
  res.json(hero);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const hero = await UserService().getById(id);
  res.json(hero);
}

export const updateById = async (req, res) => {
  const { params: { id } } = req;
  const hero = await UserService().updateById(id);
  res.json(hero);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await UserService().deleteById(id);
  res.status(200).send();
}
