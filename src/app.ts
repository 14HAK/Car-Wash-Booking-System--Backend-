import express from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app = express();
app.use(cors());
app.use(express.json());

// Test middleware
app.use((req, res, next) => {
  console.log(new Date().toISOString());
  next();
});

// modular route handlers
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('hello world!');
});

// Error Handler
app.use(notFound);
app.use(globalErrorHandler);

export default app;
