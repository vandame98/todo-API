import { DataSource } from 'typeorm';
import envVars from './env';
import { User } from '../database/entities/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: envVars.DB.HOST,
  port: envVars.DB.PORT,
  username: envVars.DB.USER,
  password: envVars.DB.PASSWORD,
  database: envVars.DB.DB_NAME,
  synchronize: false,
  logging: envVars.NODE_ENV === 'development',
  entities: [User],
  migrations: [`${__dirname}/../database/migrations/*.{j,t}s`],
});
