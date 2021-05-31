import { db, DataTypes } from '@Common/adapters/database';
import userClinics from '@Domain/entities/clinic/model/user-clinics/model';

const AdminModel = db.define('user', {
    authProviderId: {
      type: DataTypes.STRING,
      unique: true,
    },
    adminNumber: {
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
    termsAccepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }
);

AdminModel.associate = ({ clinic, invite, appointment, estimate, bill }) => {
  AdminModel.belongsToMany(clinic, { through: userClinics });
  AdminModel.hasMany(invite);
  AdminModel.hasMany(appointment);
  AdminModel.hasMany(estimate);
  AdminModel.hasMany(bill);
};

export default AdminModel;
