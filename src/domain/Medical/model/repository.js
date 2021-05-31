import getGenericRepository from '../../../common/repositories/generic-repository';
import HeroModel from './schema.js';

const HeroRepository = () => getGenericRepository(HeroModel);

export default HeroRepository;
