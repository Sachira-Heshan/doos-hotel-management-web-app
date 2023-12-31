import { Reservation } from "../models/reservationModel.js";
import { Room } from "../models/roomModel.js";
import { RoomType } from "../models/roomTypeModel.js";
import { User } from "../models/userModel.js";

const addReservation = async (req, res) => {
    const {
        room,
        bookerName,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        isPaid,
        totalAmount,
    } = req.body;
    if (
        !room ||
        !bookerName ||
        !checkInDate ||
        !checkOutDate ||
        !numberOfGuests ||
        !isPaid ||
        !totalAmount
    ) {
        res.status(400);
        throw new Error("All fields are required!");
    }
    const reservation = await Reservation.create({
        room,
        bookerName,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        isPaid,
        totalAmount,
    });
    res.status(201).json(reservation);
};

//cancel reservation
const cancelReservation = async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
        await reservation.remove();
        res.json({ message: "Reservation cancelled!" });
    } else {
        res.status(404);
        throw new Error("Reservation not found!");
    }
};

//show reservation list
const getReservations = async (req, res) => {
    const reservations = await Reservation.find({}).populate("room");
    res.json(reservations);
};
//find reservation by id
const getReservationById = async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
        res.json(reservation);
    } else {
        res.status(404);
        throw new Error("Reservation not found!");
    }
};

export { addReservation, cancelReservation, getReservations, getReservationById };
