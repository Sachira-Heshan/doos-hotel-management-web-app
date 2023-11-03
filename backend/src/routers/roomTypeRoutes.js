import {
    addRoomType, editRoomType, getRoomTypes
} from "../controllers/roomTypeControllers.js"
import express from "express"

const roomTypeRouter = express.Router()

roomTypeRouter.route("/add").post(addRoomType);
roomTypeRouter.route("/").get(getRoomTypes);
roomTypeRouter.route("/:id").put(editRoomType);


export { roomTypeRouter }
