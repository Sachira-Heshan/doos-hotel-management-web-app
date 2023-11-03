import express from 'express';

import { connectDB } from './config/db.js';
import { errorHandler } from "./middlewares/errorHandler.js"
import { authRouter } from './routers/authRoutes.js';
import { roomTypeRouter } from './routers/roomTypeRoutes.js';
import { roomsRouter } from './routers/roomRoutes.js';
import { reservationRouter } from './routers/reservationRoutes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use("/auth", authRouter);
app.use("/api/room-type", roomTypeRouter);
app.use("/api/room", roomsRouter);
app.use("/api/reservation", reservationRouter);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App is listening on Port: ${PORT}`);
})
