import getGenericRepository from '../../../common/repositories/generic-repository';
import ClinicalHistoryModel from '../../clinical-histories/model/schema';
import PatientModel from './schema.js';

const PatientRepository = () => ({
  ...getGenericRepository(PatientModel),
  getAll: (page, limit) => PatientModel.findAndCountAll({ include: ClinicalHistoryModel, order: ['id'], limit, offset: page }),
});

export default PatientRepository;
