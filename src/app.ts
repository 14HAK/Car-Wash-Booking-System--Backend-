import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import AppError from './app/errors/AppError';
import globalErrorHandler from './app/middlewares/globalError';
import notFound from './app/middlewares/notFound';

const app = express();
app.use(cors());
app.use(express.json());

// Test middleware
app.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

//routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

/// custom build error:
app.get('/error', (req: Request, res: Response) => {
  throw new AppError('custom build error just testing', 401);
});

app.use('/api', router);

// ErrorHandler handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;
