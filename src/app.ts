import express, { Express, Request, Response } from 'express';
import { setupSwagger } from './config/swagger';
import cors from 'cors';
import helmet from 'helmet';

const app: Express = express();
app.use(express.json()); // Converts the req.body to JSON
app.use(express.urlencoded({ extended: true })); // Allow to send encoded data with `x-www-form-urlencoded`
app.use(cors()); // Allow requests from other domains
app.use(helmet()); // Add security to HTTP headers

setupSwagger(app);
app.get('/', (req: Request, res: Response) => {
  res.send('✅ Hello World from Express');
});

export default app;
