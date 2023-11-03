import mongoose from "mongoose"

const reservationSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Room'
    },
    bookerName: {
        type: String,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export {Reservation};