import Users from './user/routes';
import Patients from './patients/routes';
import Auth from './auth/routes';

const Controllers = (app) => {
  Auth(app);
  Users(app);
  Patients(app);
};

export default Controllers;
