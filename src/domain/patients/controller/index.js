import PatientService from '../services';

export const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const patients = await PatientService().getAll(page, limit);
  console.log(patients);
  res.json(patients);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const patient = await PatientService().create(body);
  res.json(patient);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const patient = await PatientService().getById(id);
  res.json(patient);
}

export const updateById = async (req, res) => {
  const { params: { id } } = req;
  const patient = await PatientService().updateById(id);
  res.json(patient);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await PatientService().deleteById(id);
  res.status(200).send();
}
