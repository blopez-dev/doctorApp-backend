import getGenericRepository from '../../../common/repositories/generic-repository';
import UserModel from './schema.js';
import {where} from "sequelize";

const UserRepository = () => ({
  ...getGenericRepository(UserModel),
  getAll: (page, limit) => UserModel.findAndCountAll({ order: ['name'], limit, offset: page }),
  getById: (id) => UserModel.findByPk(id),
  findOrCreate: (authProviderId, email) => UserModel.findOrCreate({ where: { authProviderId }, defaults: { authProviderId, email } }),
});

export default UserRepository;
