import { Schema, model } from 'mongoose';
import TUSER from './user.interface';

//user mongoose schema
const userSchema = new Schema<TUSER>(
  {
    name: {
      type: String,
      required: [true, 'name must be required']
    },
    email: {
      type: String,
      required: [true, 'email must be required and unique'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'password must be required']
    },
    phone: String,
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: [true, 'role must be required']
    },
    address: String
  },
  {
    timestamps: true
  }
);

//user mongoose middleware

//user mongoose model
const userModel = model<TUSER>('User', userSchema);

export default userModel;
