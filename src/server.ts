import app from './app';
import configEnv from './app/config';

app.listen(configEnv?.port, () =>
  console.log(`Example app listening on port: http://localhost:${configEnv?.port}`)
);
