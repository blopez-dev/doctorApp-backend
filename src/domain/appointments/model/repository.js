import getGenericRepository from '../../../common/repositories/generic-repository';
import PatientModel from '../../patients/model/schema';
import UserModel from '../../user/model/schema';
import RoomModel from '../../rooms/model/schema';
import AppointmentModel from './schema.js';

const AppointmentRepository = () => ({
  ...getGenericRepository(AppointmentModel),
  getAll: () => AppointmentModel.findAll({ include: [UserModel, PatientModel, RoomModel] }),
});

export default AppointmentRepository;
