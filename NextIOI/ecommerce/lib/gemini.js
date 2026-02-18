import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generate embeddings for text using Gemini
 * @param {string} text - Text to generate embedding for
 * @returns {Promise<number[]>} - Array of embedding values
 */
export async function getEmbedding(text) {
  const model = genAI.getGenerativeModel({
    model: "gemini-embedding-001",
  });

  const result = await model.embedContent({
    content: { parts: [{ text: text }] },
    outputDimensionality: 768
  });
  return result.embedding.values;
}

// Alias for compatibility with product routes
export const getVector = getEmbedding;

/**
 * Generate conversational AI response for product recommendations
 * @param {string} question - User's question
 * @param {Array} products - Array of product objects to recommend from
 * @returns {Promise<string>} - AI-generated response
 */
export async function getChatResponse(question, products = []) {
  const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
  });

  const productContext = products.length > 0
    ? products.map(p => `
      - ${p.name} ($${p.price})
        Rating: ${p.rating || 0}/5
    `).join('\n')
    : 'No products found matching your query.';

  const prompt = `You are a helpful e-commerce assistant. A customer asked: "${question}"

${products.length > 0 ? 'Here are the relevant products I found:' : ''}
${productContext}

Please provide a helpful, friendly response that:
1. Addresses their question directly
2. ${products.length > 0 ? 'Recommends the most suitable products from the list above' : 'Suggests alternative search terms or categories'}
3. Explains why these products fit their needs
4. Keep the response concise and engaging

Response:`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

/**
 * Classify the user's intent
 * @param {string} query - User's query
 * @returns {Promise<string>} - 'product', 'order', or 'general'
 */
export async function classifyIntent(query) {
  const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
  });

  const prompt = `
    Classify the following user query into one of three categories:
    1. 'product': The user is looking for a product, asking about product details, prices, or recommendations.
    2. 'order': The user is asking about their order status, order history, shipping, or returns.
    3. 'general': The user is greeting, asking for help, or chatting casually.

    Query: "${query}"

    Respond ONLY with the category name: product, order, or general.
  `;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim().toLowerCase();

  if (text.includes('product')) return 'product';
  if (text.includes('order')) return 'order';
  return 'general';
}

/**
 * Generate conversational AI response for order queries
 * @param {string} question - User's question
 * @param {Array} orders - Array of user's order objects
 * @returns {Promise<string>} - AI-generated response
 */
export async function getOrderResponse(question, orders = []) {
  const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
  });

  const orderContext = orders.length > 0
    ? orders.map(o => `
      - Order ID: ${o._id}
        Date: ${new Date(o.createdAt).toLocaleDateString()}
        Status: ${o.status}
        Total: $${o.totalAmount}
        Items: ${o.products.map(p => `${p.quantity}x ${p.name}`).join(', ')}
    `).join('\n')
    : 'No recent orders found.';

  const prompt = `You are a helpful e-commerce assistant. A customer asked: "${question}"

Here is their recent order history:
${orderContext}

Please provide a helpful, friendly response that:
1. Addresses their question directly based on the order history.
2. If they ask about a specific order, provide details for that order.
3. If no orders are found, politely inform them.
4. Keep the response concise and engaging.

Response:`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
