import getGenericRepository from '../../../common/repositories/generic-repository';
import UserModel from './schema.js';

const UserRepository = () => ({
  ...getGenericRepository(UserModel),
  findOrCreate: (authProviderId, email) => UserModel.findOrCreate({ where: { authProviderId }, defaults: { authProviderId, email } }),
});

export default UserRepository;
