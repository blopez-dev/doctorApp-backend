import getGenericRepository from '../../../common/repositories/generic-repository';
import ClinicalHistoryModel from '../../clinical-histories/model/schema';
import PatientModel from './schema.js';

const PatientRepository = () => ({
  ...getGenericRepository(PatientModel),
  getAll: () => PatientModel.findAll({ include: ClinicalHistoryModel }),
});

export default PatientRepository;
