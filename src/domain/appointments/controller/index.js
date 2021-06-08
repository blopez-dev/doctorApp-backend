import AppointmentService from '../services';

export const getAll = async (req, res) => {
  const appointments = await AppointmentService().getAll();
  res.json(appointments);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const appointment = await AppointmentService().create(body);
  res.json(appointment);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const appointment = await AppointmentService().getById(id);
  res.json(appointment);
}

export const updateById = async (req, res) => {
  const { params: { id } } = req;
  const appointment = await AppointmentService().updateById(id);
  res.json(appointment);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await AppointmentService().deleteById(id);
  res.status(200).send();
}
