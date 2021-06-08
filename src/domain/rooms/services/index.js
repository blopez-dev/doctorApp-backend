import getRoomModel from '../model';

const RoomService = () => {
  const RoomModel = getRoomModel();
  return ({
    getAll() {
      return RoomModel.getAll();
    },
    getById(id) {
      return RoomModel.getById(id);
    },
    deleteById(id) {
      return RoomModel.deleteById(id);
    },
    updateById(id, data) {
      return RoomModel.updateById(id, data);
    },
    create(data) {
      return RoomModel.create(data);
    },
    createMany(data) {
      return RoomModel.createMany(data);
    },
  });
};

export default RoomService;
