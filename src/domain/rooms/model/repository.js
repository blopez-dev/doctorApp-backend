import getGenericRepository from '../../../common/repositories/generic-repository';
import RoomModel from './schema.js';

const RoomRepository = () => getGenericRepository(RoomModel);

export default RoomRepository;
