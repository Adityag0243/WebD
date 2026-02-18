import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const env = fs.readFileSync('.env', 'utf8');
const keyMatch = env.match(/GEMINI_API_KEY=(.*)/);
if (!keyMatch) {
    console.error("No API key found in .env");
    process.exit(1);
}
const key = keyMatch[1].trim();

const genAI = new GoogleGenerativeAI(key);

async function testEmbedding() {
    try {
        console.log("Testing with gemini-embedding-001 (requesting 768 dims)...");
        const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
        const result = await model.embedContent({
            content: { parts: [{ text: "test" }] },
            outputDimensionality: 768
        });
        console.log("SUCCESS! Embedding length:", result.embedding.values.length);
    } catch (e) {
        console.error("FAILED! Error:", e.message);
    }
}

testEmbedding();
