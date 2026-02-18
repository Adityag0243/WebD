import { getClassifiedIntent, generateOrderResponse } from '../lib/gemini.js'; // Note: importing directly from source might fail if dependencies aren't set up for node execution. 
// A better approach for integration testing is to fetch against the running server, OR unit test the logic.
// Since the server isn't running in this environment, I will unit test the gemini functions by mocking the dependencies or running a mock server.
// Actually, I can't easily mock the server.
// However, I can run a script that imports the functions if I handle the environment variables.

// Let's try to mock the API call via a script that replicates the route logic, injecting the mock user.
// This confirms the logic works before hitting the real endpoint.

import { classifyIntent, getOrderResponse } from '../lib/gemini.js';
import { getUserOrders } from '../lib/orders.js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // Load env variables

async function testChatLogic() {
    const TEST_USER_EMAIL = 'salmanbhai@gmail.com';
    const questions = [
        "Where is my order?",
        "Show me red shoes",
        "Hello there"
    ];

    console.log('--- Starting Chat Logic Test ---');

    for (const q of questions) {
        console.log(`\nQuestion: "${q}"`);

        // 1. Classification
        const intent = await classifyIntent(q);
        console.log(`> Intent: ${intent}`);

        // 2. Routing
        if (intent === 'order') {
            console.log('> Fetching orders...');
            const orders = await getUserOrders(TEST_USER_EMAIL);
            console.log(`> Found ${orders.length} orders.`);

            console.log('> Generating response...');
            const response = await getOrderResponse(q, orders);
            console.log(`> Response: ${response}`);
        } else {
            console.log('> (Skipping product/general logic for this test script)');
        }
    }
}

testChatLogic();
