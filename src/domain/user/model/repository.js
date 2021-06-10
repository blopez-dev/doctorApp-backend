import { Op } from '@Common/adapters/database';
import getGenericRepository from '../../../common/repositories/generic-repository';
import UserModel from './schema.js';

const { or, iLike } = Op;

const searchQuery = (offset, limit, filters = {}) => filters.search ? {
  where: {
    [or]: [
      { name: { [iLike]: `%${filters.search}%` } },
      { specialty: { [iLike]: `%${filters.search}%` } },
    ],
  }
} : { offset, limit };

const UserRepository = () => ({
  ...getGenericRepository(UserModel),
  getAll: (offset, limit, filters) => UserModel.findAndCountAll({ order: ['name'], ...searchQuery(offset, limit, filters) }),
  getById: (id) => UserModel.findByPk(id),
  findOrCreate: (authProviderId, email) => UserModel.findOrCreate({ where: { authProviderId }, defaults: { authProviderId, email } }),
});

export default UserRepository;
