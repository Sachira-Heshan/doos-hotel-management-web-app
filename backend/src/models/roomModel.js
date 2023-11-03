import mongoose from "mongoose"
const roomSchema = new mongoose.Schema({
   
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    isClean: {
        type: Boolean,
        required: true
    },
    isOccupied: {
        type: Boolean,
        required: true
    },
    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'RoomType'
    }

  
});

const Room = mongoose.model('Room', roomSchema);
export {Room};

