import getClinicalHistoryRepository from '../../../common/repositories/generic-repository';
import ClinicalHistoryModel from './schema.js';

const ClinicalHistoryRepository = () => getClinicalHistoryRepository(ClinicalHistoryModel);

export default ClinicalHistoryRepository;
