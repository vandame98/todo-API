import app from './app';
import { AppDataSource } from './config/database';
import { logger } from './config/winston';

const PORT: number = Number(process.env.PORT) || 3000;

// 📌 Iniciar conexión con la base de datos antes de arrancar el servidor
AppDataSource.initialize()
  .then(() => {
    logger.info('✅ Conexión a la base de datos establecida');
    app.listen(PORT, () => {
      logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    logger.error('❌ No se pudo conectar a la base de datos:', error);
    process.exit(1); // Salir con error si no puede conectar
  });
