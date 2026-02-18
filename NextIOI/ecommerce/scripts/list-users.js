import { connectToDatabase } from '../db/db.config.js';
import { User } from '../model/user.model.js';
import mongoose from 'mongoose';

async function listUsers() {
    await connectToDatabase();
    const users = await User.find({});
    console.log('Users:', users);
    mongoose.connection.close();
}

listUsers();
