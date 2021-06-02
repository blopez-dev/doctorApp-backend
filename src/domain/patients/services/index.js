import getPatientModel from '../model';

const PatientService = () => {
  const PatientModel = getPatientModel();
  return ({
    getAll() {
      return PatientModel.getAll();
    },
    getById(id) {
      return PatientModel.getById(id);
    },
    deleteById(id) {
      return PatientModel.deleteById(id);
    },
    updateById(id, data) {
      return PatientModel.updateById(id, data);
    },
    create(data) {
      return PatientModel.create(data);
    },
    createMany(data) {
      return PatientModel.createMany(data);
    },
  });
};

export default PatientService;
