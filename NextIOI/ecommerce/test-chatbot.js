/**
 * Simple Test for Gemini Chatbot
 * 
 * This file demonstrates how to test the chatbot API
 * Run this in your browser console or use it in your frontend
 */

// Example 1: Basic product search
async function testChatbot() {
    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: 'I need a laptop for programming'
            })
        });

        const data = await response.json();
        console.log('AI Response:', data.answer);
        console.log('Products Found:', data.products);

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example 2: Category-specific search
async function searchByCategory() {
    const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            question: 'Show me electronics'
        })
    });

    return await response.json();
}

// Example 3: Price-based search
async function searchByPrice() {
    const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            question: 'What products do you have under $500?'
        })
    });

    return await response.json();
}

// Example 4: Feature-based search
async function searchByFeature() {
    const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            question: 'I need wireless headphones with good battery life'
        })
    });

    return await response.json();
}

// Run all tests
async function runAllTests() {
    console.log('=== Test 1: Basic Search ===');
    await testChatbot();

    console.log('\n=== Test 2: Category Search ===');
    await searchByCategory();

    console.log('\n=== Test 3: Price Search ===');
    await searchByPrice();

    console.log('\n=== Test 4: Feature Search ===');
    await searchByFeature();
}

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        testChatbot,
        searchByCategory,
        searchByPrice,
        searchByFeature,
        runAllTests
    };
}

// Usage in browser console:
// testChatbot();
// Or run all: runAllTests();
