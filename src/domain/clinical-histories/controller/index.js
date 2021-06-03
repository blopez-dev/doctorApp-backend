import ClinicalHistoriesService from '../services';

export const getAll = async (req, res) => {
  const users = await ClinicalHistoriesService().getAll();
  res.json(users);
}

export const createOne = async (req, res) => {
  const { body } = req;
  const clinicalHistory = await ClinicalHistoriesService().create(body);
  res.json(clinicalHistory);
}

export const getById = async (req, res) => {
  const { params: { id } } = req;
  const clinicalHistory = await ClinicalHistoriesService().getById(id);
  res.json(clinicalHistory);
}

export const updateById = async (req, res) => {
  const { params: { id } } = req;
  const clinicalHistory = await ClinicalHistoriesService().updateById(id);
  res.json(clinicalHistory);
}

export const deleteById = async (req, res) => {
  const { params: { id } } = req;
  await ClinicalHistoriesService().deleteById(id);
  res.status(200).send();
}
