import getAppointmentModel from '../model';

const AppointmentService = () => {
  const AppointmentModel = getAppointmentModel();
  return ({
    getAll() {
      return AppointmentModel.getAll();
    },
    getById(id) {
      return AppointmentModel.getById(id);
    },
    deleteById(id) {
      return AppointmentModel.deleteById(id);
    },
    updateById(id, data) {
      return AppointmentModel.updateById(id, data);
    },
    create(data) {
      return AppointmentModel.create(data);
    },
    createMany(data) {
      return AppointmentModel.createMany(data);
    },
  });
};

export default AppointmentService;
