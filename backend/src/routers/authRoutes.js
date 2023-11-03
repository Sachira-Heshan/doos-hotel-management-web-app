import {
    userRegister,
    userLogin
} from "../controllers/authControllers.js"
import express from "express"
import { validateToken } from "../middlewares/validateTokenHandler.js"

const authRouter = express.Router()

authRouter.route("/register").post(userRegister)
authRouter.route("/login").post(userLogin)

export { authRouter }