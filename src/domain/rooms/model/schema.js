import { db, DataTypes } from '@Common/adapters/database';

const RoomModel = db.define('room', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

export default RoomModel;
