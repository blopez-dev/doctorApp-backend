import RoomService from '../services';

export const getAll = async (req, res) => {
  const rooms = await RoomService().getAll();
  res.json(rooms);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const room = await RoomService().create(body);
  res.json(room);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const room = await RoomService().getById(id);
  res.json(room);
}

export const updateById = async (req, res) => {
  const { params: { id } } = req;
  const room = await RoomService().updateById(id);
  res.json(room);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await RoomService().deleteById(id);
  res.status(200).send();
}
