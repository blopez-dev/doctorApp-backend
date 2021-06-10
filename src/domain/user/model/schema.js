import { db, DataTypes } from '@Common/adapters/database';

const UserModel = db.define('user', {
    authProviderId: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    specialty: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }
);

export default UserModel;
