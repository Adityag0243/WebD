import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const env = fs.readFileSync('.env', 'utf8');
const key = env.match(/GEMINI_API_KEY=(.*)/)[1].trim();

const genAI = new GoogleGenerativeAI(key);

async function findEmbeddingModels() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!data.models) {
            console.log("No models found. Error:", JSON.stringify(data));
            return;
        }
        const embeddingModels = data.models.filter(m =>
            m.supportedGenerationMethods.includes("embedContent")
        );
        console.log("Available Embedding Models:");
        embeddingModels.forEach(m => {
            console.log(`- ${m.name} (${m.displayName})`);
        });
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

findEmbeddingModels();
