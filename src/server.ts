import app from './app';
import configEnv from './app/config';

console.log(configEnv?.mongodb_uri as string);

app.listen(configEnv?.port, () =>
  console.log(`Example app listening on port: http://localhost:${configEnv?.port}`)
);
