import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [{
        productId: String,
        name: String,
        quantity: Number,
        price: Number,
        image: String
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Prevent model recompilation error in Next.js hot reloading
export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
