import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { TUSER, UserModel } from './user.interface';

//user mongoose schema
const userSchema = new Schema<TUSER, UserModel>(
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
    phone: {
      type: String,
      required: [true, 'phone must be required']
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: [true, 'role must be required']
    },
    address: {
      type: String,
      required: [true, 'address must be required']
    }
  },
  {
    timestamps: true
  }
);

//user mongoose middleware
userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 11);
    next();
  } catch (error) {
    next(error as Error);
  }
});

//user mongoose methods
userSchema.static(
  'comparePassword',
  async function comparePassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
);

//user mongoose model
const User = model<TUSER, UserModel>('User', userSchema);

export default User;
