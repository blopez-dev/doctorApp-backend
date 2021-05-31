import { db, DataTypes } from '@Common/adapters/database';
import userClinics from '@Domain/entities/clinic/model/user-clinics/model';

const MedicalModel = db.define('user', {
  authProviderId: {
    type: DataTypes.STRING,
    unique: true,
  },
  collegiateNumber: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true,
    unique: true,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  phone: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  address: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  placeId: {
    type: DataTypes.STRING,
    defaultValue: '',
  },

  termsAccepted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}
);

MedicalModel.associate = ({ clinic, invite, appointment, estimate, bill }) => {
  MedicalModel.belongsToMany(clinic, { through: userClinics });
  MedicalModel.hasMany(invite);
  MedicalModel.hasMany(appointment);
  MedicalModel.hasMany(estimate);
  MedicalModel.hasMany(bill);
};

export default MedicalModel;
