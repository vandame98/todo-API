import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo App API',
      version: '1.0.0',
      description: '',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'localhost server',
      },
    ],
  },
  apis: [path.join(__dirname, '../../docs/swagger/**/*.yml')], // 🔹 También leerá otros YAML en `docs/swagger`
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
