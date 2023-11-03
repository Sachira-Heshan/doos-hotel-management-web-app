import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        unique: [true, "Username already exist!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: [true, "Email already registered!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required!"],
        unique: [true, "Phone number already registered!"]
    },
},
    {
        timestamps: true,
    }
)

const User = mongoose.model("User", userSchema, "users")

export { User }