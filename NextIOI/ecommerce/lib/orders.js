import { connectToDatabase } from "../db/db.config.js";
import { Order } from "../model/order.model.js";

/**
 * Fetch orders for a specific user
 * @param {string} userId - User's ID (or email depending on how we store it)
 * @param {number} limit - Max number of orders to return
 * @returns {Promise<Array>} - List of orders
 */
export async function getUserOrders(userId, limit = 5) {
    try {
        await connectToDatabase();

        // Determine if userId is an email or an ID. 
        // The auth flow uses email/googleId/name in the token.
        // We'll search by userId corresponding to the token's email or sub if possible.
        // For now, let's assume the passed 'userId' is the one stored in Order.userId.

        const orders = await Order.find({ userId: userId })
            .sort({ createdAt: -1 })
            .limit(limit);

        return orders;
    } catch (error) {
        console.error("Error fetching user orders:", error);
        return [];
    }
}
