import { Room } from "../models/roomModel.js"



const addRoom = async (req, res) => {
    const {
        roomNumber,
        isAvailable,
        isClean,
        isOccupied,
    } = req.body
    if ( !roomNumber || !isAvailable || !isClean || !isOccupied) {
        res.status(400)
        throw new Error("All fields are required!")
    }
    const room = await Room.create({
        roomNumber,
        isAvailable,
        isClean,
        isOccupied,
    })
    res.status(201).json(room)
}

const getRooms = async (req, res) => {
    const rooms = await Room.find({})
    res.json(rooms)
}
const getRoomById = async (req, res) => {
    const room = await Room.findById(req.params.id)
    if (room) {
        res.json(room)
    } else {
        res.status(404)
        throw new Error("Room not found!")
    }
}
const updateRoom = async (req, res) => {
    const {
       
        isAvailable,
        isClean,
        isOccupied,
    } = req.body
    const room = await Room.findById(req.params.id)
    if (room) {
        room.isAvailable = isAvailable
        room.isClean = isClean
        room.isOccupied = isOccupied
        const updatedRoom = await room.save()
        res.json(updatedRoom)
    } else {
        res.status(404)
        throw new Error("Room not found!")
    }
}

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


export { addRoom ,getRoomById, getRooms, updateRoom}