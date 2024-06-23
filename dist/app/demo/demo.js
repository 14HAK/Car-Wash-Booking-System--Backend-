"use strict";
// import { Model, Schema, model } from 'mongoose';
// interface IUser {
//   firstName: string;
//   lastName: string;
// }
// // Put all user instance methods in this interface:
// interface IUserMethods {
//   fullName(): string;
// }
// // Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;
// const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
//   // firstName: String;
//   // lastName: String;
// });
// // create methods
// //way1:
// UserSchema.method('fullName', function fullName() {
//   return this.firstName + ' ' + this.lastName;
// });
// // create methods
// //way2:
// // Define instance methods using `methods`
// userSchema.methods = {
//   fullName() {
//     return `Hello, my name is ${this.name}`;
//   },
//   greet() {
//     return `Greetings from ${this.name}`;
//   }
// };
// const User = model<IUser, UserModel>('User', UserSchema);
