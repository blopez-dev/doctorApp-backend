import { Sequelize } from 'sequelize';
import { uri } from '../../../application/config/database.js';

const options = {
  dialectOptions: {
    native: true,
    ssl: { rejectUnauthorized: false },
  }
}

const db = new Sequelize(uri, options);

export const Connect = () => db.authenticate();
