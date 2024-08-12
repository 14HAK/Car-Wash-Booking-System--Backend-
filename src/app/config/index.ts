import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  node_environment: process.env.NODE_ENV,
  jwt_String: process.env.JWT_SECRET
};
