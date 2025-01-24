import winston from 'winston';
const isProduction = process.env.NODE_ENV === 'production';

export const logger = winston.createLogger({
  level: isProduction ? 'info' : 'debug',
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  transports: [
    new winston.transports.Console(),
    ...(isProduction ? [new winston.transports.File({ filename: 'logs/app.log' })] : []),
  ],
});
