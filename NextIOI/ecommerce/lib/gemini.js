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
