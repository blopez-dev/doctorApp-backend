import getUserModel from '../model';

const UserService = () => {
  const UserModel = getUserModel();
  return ({
    getAll(page = 1, limit = 15) {
      return UserModel.getAll(page, limit);
    },
    getById(id) {
      return UserModel.getById(id);
    },
    deleteById(id) {
      return UserModel.deleteById(id);
    },
    updateById(id, data) {
      return UserModel.updateById(id, data);
    },
    create(data) {
      return UserModel.create(data);
    },
    findOrCreate(authId, email) {
      return UserModel.findOrCreate(authId, email);
    },
    createMany(data) {
      return UserModel.createMany(data);
    },
  });
};

export default UserService;
