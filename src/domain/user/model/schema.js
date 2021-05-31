import { db, DataTypes } from '@Common/adapters/database';

const UserModel = db.define('user', {
    authProviderId: {
      type: DataTypes.STRING,
      unique: true,
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
  }
);

export default UserModel;
