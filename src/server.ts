import mongoose from 'mongoose';
import app from './app';
import configEnv from './app/config';

async function main() {
  try {
    await mongoose.connect(configEnv?.mongodb_uri as string);
    console.log('mongoose mongoDB connection successfully!');

    app.listen(configEnv?.port, () =>
      console.log(`server listening on port: http://localhost:${configEnv?.port}`)
    );
  } catch (error) {
    console.log(error);
  }
}
main();
