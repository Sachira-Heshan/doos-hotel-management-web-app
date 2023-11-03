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
export { addRoom }