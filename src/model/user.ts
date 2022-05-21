import mongoose from "mongoose";

// users attributes
interface UserAttrs {
  email: string;
  password: string;
  firstName:string;
  secondName : string;
  _id? :string
}

// describe user model to asign static methods to the modal
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// single documents properties
interface UserDoc extends mongoose.Document {
  email: string;
  password?: string;
  firstName:string;
  secondName : string;
  createdAt: any;

}

const user = new mongoose.Schema(
  {
    email: { type: String, required: true },
    firstName: String,
    secondName: String,
    password: { type: String, required: true },
  },
  { timestamps: true }
);

user.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

user.methods.toJSON = function () {
  const document = this;
  const documentObject = document.toObject();
  delete documentObject.password;
  return documentObject;
};



const User = mongoose.model<UserDoc, UserModel>("user", user);

export { User };
