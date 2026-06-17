import mongoose, { models, Schema } from "mongoose";
import { type } from "node:os";

const userSchema = new Schema({
    name: {
        type: String,
        reuired: true,
    },
    email: {
        type: String,
        reuired: true,
    },
    password: {
        type: String,
        reuired: true,
    },
}, {timestamps: true})



const User = models.User || mongoose.model("User", userSchema)
export default User