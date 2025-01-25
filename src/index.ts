import app from './app';
import { logger } from './config/winston';

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, (): void => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
});
