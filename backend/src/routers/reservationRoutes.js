import {addReservation, cancelReservation, getReservations,getReservationById} from '../controllers/reservationControllers.js';
import express from 'express';

const reservationRouter = express.Router();

reservationRouter.route('/add').post(addReservation);
reservationRouter.route('/').get(getReservations);
reservationRouter.route('/cancel/:id').delete(cancelReservation);
reservationRouter.route('/:id').get(getReservationById);


export { reservationRouter };

