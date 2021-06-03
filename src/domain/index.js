import Users from './user/routes';
import Patients from './patients/routes';
import Auth from './auth/routes';
import ClinicalHistories from './clinical-histories/routes';

const Controllers = (app) => {
  Auth(app);
  Users(app);
  Patients(app);
  ClinicalHistories(app);
};

export default Controllers;
