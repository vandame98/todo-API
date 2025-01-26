import { DataSource } from 'typeorm';
import envVars from './env';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: envVars.DB.HOST, // ✅ Ahora toma el host correcto
  port: envVars.DB.PORT, // ✅ Asegura que tome el puerto correcto (3309)
  username: envVars.DB.USER,
  password: envVars.DB.PASSWORD,
  database: envVars.DB.DB_NAME, // ✅ Asegura que use el nombre correcto
  synchronize: false,
  logging: envVars.NODE_ENV === 'development',
  entities: [], // 🔹 Esto debería contener entidades en el futuro
  migrations: [`${__dirname}/../database/migrations/*.{j,t}s`], // 🔹 Corregir la ruta para migraciones
});
