/* eslint-disable no-process-exit */
import mongoose from 'mongoose';
import app from './app';
import configEnv from './app/config';
import AppError from './app/errors/AppError';
import { Server } from 'http';

let server: Server;

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

// Handling unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  server.close(() => {
    process.exit(1);
  });
});

// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  server.close(() => {
    process.exit(1);
  });
});

// // Graceful Shutdown Function (Optional)
// const gracefulShutdown = (server: any, signal: any) => {
//   console.log(`${signal} received`);
//   server.close(() => {
//     console.log('Server closed');
//     mongoose.connection.close(false);
//   });
// };

// // Register the signal handlers
// process.on('SIGTERM', () => gracefulShutdown(server, 'SIGTERM'));
// process.on('SIGINT', () => gracefulShutdown(server, 'SIGINT'));
