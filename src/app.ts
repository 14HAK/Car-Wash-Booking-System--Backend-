import express from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalError';
import notFound from './app/middlewares/notFound';
import zodErrorHandler from './app/errors/zodErrorHandler';
import mongooseErrorHandler from './app/errors/mongooseErrorHandler';

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

app.use(zodErrorHandler);
app.use(mongooseErrorHandler);


// Error Handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;
