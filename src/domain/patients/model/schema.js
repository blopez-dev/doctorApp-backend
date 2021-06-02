import { db, DataTypes } from '@Common/adapters/database';

const PatientModel = db.define('patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    pathologies: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  }
);

export default PatientModel;
