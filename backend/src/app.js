import express from 'express';

import { connectDB } from './config/db.js';
import { errorHandler } from "./middlewares/errorHandler.js"
import { authRouter } from './routers/authRoutes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use("/auth", authRouter);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App is listening on Port: ${PORT}`);
})
