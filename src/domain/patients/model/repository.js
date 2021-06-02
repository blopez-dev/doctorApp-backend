import getGenericRepository from '../../../common/repositories/generic-repository';
import PatientModel from './schema.js';

const PatientRepository = () => getGenericRepository(PatientModel);

export default PatientRepository;
