import UserService from '../services';

export const getAll = async (req, res) => {
  const { page, limit, ...filters } = req.query;
  const users = await UserService().getAll(page, limit, filters);
  res.json(users);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const user = await UserService().create(body);
  res.json(user);
}

export const getById = async (req, res) => {
  try{
    const { params: { id } } = req;
    const user = await UserService().getById(Number(id));
    res.json(user);
  } catch (error){
    console.log(error);
  }
}

export const updateById = async (req, res) => {
  const { params: { id }, body } = req;
  const user = await UserService().updateById(Number(id), body);
  console.log(user);
  res.json(user);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await UserService().deleteById(Number(id));
  res.status(200).send('User deleted correctly');
}
