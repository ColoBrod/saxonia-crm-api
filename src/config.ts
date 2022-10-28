import type { Options } from 'sequelize';
import type { ConnectionOptions } from 'mysql2';

const MYSQL_USER = 'saxonia';
const MYSQL_PASSWORD = 'secret';
const MYSQL_DATABASE = 'saxonia';
const MYSQL_HOST = 'localhost';
const MYSQL_PORT = 3306;

export type SequelizeOptions = {
  database: string,
  username: string,
  password: string,
  options: Options
}

export type Config = {
  port: number,
  mysql?: ConnectionOptions,
  sequelize?: SequelizeOptions,
};

const config: Config = {
  port: 3000,
  mysql: {
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
  },
  sequelize: {
    database: MYSQL_DATABASE,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    options: {
      host: MYSQL_HOST,
      dialect: 'mysql',
    },
  },
};

export default config;