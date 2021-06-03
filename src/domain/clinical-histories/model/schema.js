import { db, DataTypes } from '@Common/adapters/database';

const ClinicalHistoryModel = db.define('clinicalHistory', {
    patology: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

ClinicalHistoryModel.associate = ({ patient }) => {
  ClinicalHistoryModel.belongsTo(patient);
}

export default ClinicalHistoryModel;
