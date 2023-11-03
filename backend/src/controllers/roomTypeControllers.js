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

const editRoomType = async (req, res) => {
    const {
        name,
        maxGuests,
        ratePerNight,
       
    } = req.body
    if (!name || !maxGuests || !ratePerNight ) {
        res.status(400)
        throw new Error("All fields are required!")
    }
    const roomType = await RoomType.findById(req.params.id)
    if (roomType) {
        roomType.name = name
        roomType.maxGuests = maxGuests
        roomType.ratePerNight = ratePerNight
        const updatedRoomType = await roomType.save()
        res.json(updatedRoomType)
    } else {
        res.status(404)
        throw new Error("Room type not found!")
    }
}

//show room type list
const getRoomTypes = async (req, res) => {
    const roomTypes = await RoomType.find({})
    res.json(roomTypes)
}
export { addRoomType, editRoomType, getRoomTypes }