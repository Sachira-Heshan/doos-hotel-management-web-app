import {
    addRoom,
} from "../controllers/roomControllers.js"
import express from "express"

const roomsRouter = express.Router()

roomsRouter.route("/add").post(addRoom);




export {roomsRouter }
