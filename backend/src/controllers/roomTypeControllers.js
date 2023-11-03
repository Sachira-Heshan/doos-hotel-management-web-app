import { RoomType } from "../models/roomTypeModel.js"

// const router = express.Router();

const addRoomType = async (req, res) => {
    const {
        name,
        maxGuests,
        ratePerNight,
       
    } = req.body
    if (!name || !maxGuests || !ratePerNight ) {
        res.status(400)
        throw new Error("All fields are required!")
    }
    const roomType = await RoomType.create({
        name,
        maxGuests,
        ratePerNight,
    })
    res.status(201).json(roomType)
}
export { addRoomType }