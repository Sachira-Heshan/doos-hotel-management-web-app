import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js"

//@desc User register
//@route POST /auth/register
//@access public
const userRegister = asyncHandler(async (req, res) => {
    const {
        username,
        email,
        password,
        phone
    } = req.body
    if (!username || !email || !password || !phone) {
        res.status(400)
        throw new Error("All fields are required!")
    }
    const usernameCheck = await User.findOne({ username: username }).exec()
    console.log(usernameCheck)
    if (usernameCheck) {
        res.status(400)
        throw new Error("Username already exist!")
    }
    const userEmailCheck = await User.findOne({ email: email }).exec()
    if (userEmailCheck) {
        res.status(400)
        throw new Error("User already exist with given email!")
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        phone
    })
    console.log(user)
})

//@desc User login
//@route POST /auth/login
//@access public
const userLogin = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400)
        throw new Error("All fields are required!")
    }
    const user = await User.findOne({ username })
    if (!user) {
        res.status(400)
        throw new Error("User doesn't exist!")
    }
    //compare the hashed password with requested one
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        res.status(400)
        throw new Error("Password is incorrect!")
    }
    const accessToken = jwt.sign({
        user: {
            user_id: user._id,
            username: user.username,
            email: user.email
        }
    }, process.env.JWT_SECRET, {
        expiresIn: 30 * 24 * 60 * 60 //1 month expire time "1m"
    })
    if (!accessToken) {
        res.status(401)
        throw new Error("Something went wrong!")
    }
    const user_data = {
        user_id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone
    }
    res.status(200).json({ accessToken, user_data })
})

export {
    userRegister,
    userLogin
}