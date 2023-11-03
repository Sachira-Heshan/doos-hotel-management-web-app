import express from 'express';

import { connectDB } from './config/db';
import { errorHandler } from "./middlewares/errorHandler.js"
import { authRoutes } from '';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App is listening on Port: ${PORT}`);
})
