import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
const options = {
  apis: [path.join(__dirname, '../../docs/swagger/**/*.yml')],
};

const swaggerSpec = swaggerJSDoc(options);

/**
 * Configuración de Swagger
 * @param {Express} app - Instancia de la aplicación Express
 */
export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
