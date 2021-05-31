import { Sequelize } from 'sequelize';

const { DATABASE_URL } = process.env;
const { DB_HOST } = process.env;
const { DB_DATABASE } = process.env;
const { DB_PORT } = process.env;
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_SSL } = process.env;

const uri = DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
const ssl = DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {};

const options = {
  dialectOptions: {
    native: true,
    ...ssl,
  },
};

const db = new Sequelize(uri, options);

export const Connect = () => db.authenticate().then(() => console.log('Connected!'));
