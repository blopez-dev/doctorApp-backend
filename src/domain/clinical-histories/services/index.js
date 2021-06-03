import getClinicalHistoryModel from '../model';

const ClinicalHistoryService = () => {
  const ClinicalHistoryModel = getClinicalHistoryModel();
  return ({
    getAll() {
      return ClinicalHistoryModel.getAll();
    },
    getById(id) {
      return ClinicalHistoryModel.getById(id);
    },
    deleteById(id) {
      return ClinicalHistoryModel.deleteById(id);
    },
    updateById(id, data) {
      return ClinicalHistoryModel.updateById(id, data);
    },
    create(data) {
      return ClinicalHistoryModel.create(data);
    },
    createMany(data) {
      return ClinicalHistoryModel.createMany(data);
    },
  });
};

export default ClinicalHistoryService;
