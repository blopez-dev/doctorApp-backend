import getUserModel from '../model';

const UserService = () => {
  const UserModel = getUserModel();
  return ({
    getAll() {
      return UserModel.getAll();
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
  });
};

export default UserService;
