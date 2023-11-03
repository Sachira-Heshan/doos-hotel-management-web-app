import {
    addRoom ,getRoomById, getRooms, updateRoom
} from "../controllers/roomControllers.js"
import express from "express"

const roomsRouter = express.Router()

roomsRouter.route("/add").post(addRoom);
roomsRouter.route("/").get(getRooms);
roomsRouter.route("/:id").get(getRoomById);
roomsRouter.route("/:id").put(updateRoom);





export {roomsRouter }
