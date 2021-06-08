import { db, DataTypes } from '@Common/adapters/database';

const AppointmentModel = db.define('appointment', {
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }
);

AppointmentModel.associate = ({ patient, user, room }) => {
  AppointmentModel.belongsTo(patient);
  AppointmentModel.belongsTo(user);
  AppointmentModel.belongsTo(room);
};

export default AppointmentModel;
