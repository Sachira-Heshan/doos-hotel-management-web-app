import e from "express"
import {
    addRoomType, editRoomType, getRoomTypes
} from "../controllers/addroomTypeControllers.js"
import express from "express"

const roomTypeRouter = express.Router()

roomTypeRouter.route("/add").post(addRoomType);
roomTypeRouter.route("/").get(getRoomTypes);
roomTypeRouter.route("/:id").put(editRoomType);


export { roomTypeRouter }
