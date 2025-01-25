import express, { Express, Request, Response } from 'express';
import { setupSwagger } from './config/swagger';

const app: Express = express();
setupSwagger(app);
app.get('/', (req: Request, res: Response) => {
  res.send('✅ Hello World from Express');
});

export default app;
