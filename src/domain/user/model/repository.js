import getGenericRepository from '../../../common/repositories/generic-repository';
import UserModel from './schema.js';

const UserRepository = () => getGenericRepository(UserModel);

export default UserRepository;
