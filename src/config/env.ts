import dotenv from 'dotenv';
import Joi from 'joi';
import path from 'path';
import fs from 'fs';
import { logger } from './winston';

// Check if the .env file exists before loading it
const envPath = path.resolve(__dirname, '../../.env');
if (!fs.existsSync(envPath)) {
  logger.warn('.env file not found. Using system environment variables.');
} else {
  dotenv.config({ path: envPath });
}

interface DotEnvFile {
  NODE_ENV: string;
  PORT: number;
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  MYSQL_DB_NAME: string;
}

const envSchema = Joi.object<DotEnvFile>({
  NODE_ENV: Joi.string().valid('development', 'production').required(),
  PORT: Joi.number().integer().positive().required(),
  MYSQL_HOST: Joi.string().required(),
  MYSQL_PORT: Joi.number().integer().positive().required(),
  MYSQL_USER: Joi.string().required(),
  MYSQL_PASSWORD: Joi.string().required(),
  MYSQL_DB_NAME: Joi.string().required(),
}).unknown();

const { value, error } = envSchema.validate(process.env, {
  abortEarly: false,
  errors: { label: 'key' },
});

if (error) {
  throw new Error(`Environment variables error:\n${error.details.map((err) => `- ${err.message}`).join('\n')}`);
}

const envVars = {
  NODE_ENV: value.NODE_ENV,
  PORT: Number(value.PORT),
  DB: {
    HOST: value.MYSQL_HOST!,
    PORT: Number(value.MYSQL_PORT),
    USER: value.MYSQL_USER!,
    PASSWORD: value.MYSQL_PASSWORD!,
    DB_NAME: value.MYSQL_DB_NAME!,
  },
};

if (envVars.NODE_ENV === 'development') {
  logger.info('Environment variables successfully loaded from .env');
}
export default envVars;
