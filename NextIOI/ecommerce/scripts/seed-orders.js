import { connectToDatabase } from '../db/db.config.js';
import { Order } from '../model/order.model.js';
import mongoose from 'mongoose';

const TEST_USER_EMAIL = 'salmanbhai@gmail.com';

async function seedOrders() {
    await connectToDatabase();

    // Create a few dummy orders
    const orders = [
        {
            userId: TEST_USER_EMAIL, // Using email as ID for now based on previous findings
            products: [
                { name: 'Wireless Headphones', price: 99.99, quantity: 1, image: 'https://via.placeholder.com/150' },
                { name: 'USB-C Cable', price: 15.00, quantity: 2, image: 'https://via.placeholder.com/150' }
            ],
            totalAmount: 129.99,
            status: 'delivered',
            createdAt: new Date('2024-01-15')
        },
        {
            userId: TEST_USER_EMAIL,
            products: [
                { name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://via.placeholder.com/150' }
            ],
            totalAmount: 199.99,
            status: 'shipped',
            createdAt: new Date() // Today
        }
    ];

    try {
        await Order.insertMany(orders);
        console.log('Seeded orders successfully');
    } catch (error) {
        console.error('Error seeding orders:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedOrders();
