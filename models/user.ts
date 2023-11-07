import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"]
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
    },
    password: {
        type: String,
        required: true
    },

    subscribe: {
        type: Boolean,
        required: true
    },

    termsAndConditions:{
        type: Boolean,
        required: true
    },

    image: {
        type: String
    }
},
    {timestamps: true}
);

const User = models.User || model("User", UserSchema)

export default User;