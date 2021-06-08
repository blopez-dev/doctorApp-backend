import { getRawData } from '../utils';
import seedPatients from './patient';
import seedAppointments from './appointment';
import seedRooms from './rooms';
import seedUsers from './doctor';

const Seed = async () => {
  try {
    const patients = await seedPatients();
    const users = await seedUsers();
    const rooms = await seedRooms();
    await seedAppointments(getRawData(patients), getRawData(users), getRawData(rooms));
  } catch(err) {
    console.log(err)
  }
};

export default Seed;
