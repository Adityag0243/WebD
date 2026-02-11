import jwt from 'jsonwebtoken';
const JWT_SECRET =  '123Aditya';


export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded; // Returns payload
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return null; 
    }
}