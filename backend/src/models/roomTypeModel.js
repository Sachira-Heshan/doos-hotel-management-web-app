// RoomType model
import mongoose from "mongoose"
const roomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    maxGuests: {
        type: Number,
        required: true
    },
    ratePerNight: {
        type: Number,
        required: true
    }
});

const RoomType = mongoose.model('RoomType', roomTypeSchema);

export {RoomType};


