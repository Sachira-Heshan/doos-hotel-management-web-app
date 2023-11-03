import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Hotel Management App DB Connected...!")
    } catch (err) {
        console.log(err)
    }
}

export { connectDB };

