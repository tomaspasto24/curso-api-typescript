import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
   {
    name: {
        required: true,
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: "Soy la descripción por default"
    }
   }, 
   {
    versionKey: false,
    timestamps: true
   }
);

// model recibe nombre del modelo en la base datos y el schema que lo alimenta.
const UserModel = model('users', UserSchema);

export default UserModel;