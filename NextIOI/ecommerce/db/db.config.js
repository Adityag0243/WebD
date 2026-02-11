import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';

export const connectToDatabase = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }   
};
