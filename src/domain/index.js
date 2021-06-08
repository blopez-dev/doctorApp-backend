import Users from './user/routes';
import Patients from './patients/routes';
import Auth from './auth/routes';
import Appointments from './appointments/routes';
import Rooms from './rooms/routes';
import ClinicalHistories from './clinical-histories/routes';

const Controllers = (app) => {
  Auth(app);
  Users(app);
  Patients(app);
  Appointments(app);
  Rooms(app);
  ClinicalHistories(app);
};

export default Controllers;
