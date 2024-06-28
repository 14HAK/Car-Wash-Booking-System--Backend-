import mongoose from 'mongoose';
import app from './app';
import configEnv from './app/config';
import AppError from './app/errors/AppError';

let server: any = '';

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(err.name, err.message);
  const appError = new AppError('Uncaught Exception', 500);
  throw appError;
});

async function main() {
  try {
    await mongoose.connect(configEnv?.mongodb_uri as string);
    mongoose.set('strictPopulate', false);
    console.log('mongoose mongoDB connection successfully!');

    server = app.listen(configEnv?.port, () =>
      console.log(`server listening on port: http://localhost:${configEnv?.port}`)
    );
  } catch (err: any) {
    throw new AppError('mongoose connection failed!', 500);
  }
}
main();

process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(reason);

  server.close(() => {
    const appError = new AppError('Unhandled Rejection', 500);
    throw appError;
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('uncaughtException', (err, origin) => {
  console.error(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  server.close(() => {
    console.log('Uncaught Exception');
  });
});
