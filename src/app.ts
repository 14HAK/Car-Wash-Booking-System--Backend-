import express from 'express';
import cors from 'cors';
import router from './app/routes';
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

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/api', router);

// Error Handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;
