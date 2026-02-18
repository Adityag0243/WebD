import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

// Simple way to read env file if dotenv isn't playing nice
const env = fs.readFileSync('.env', 'utf8');
const key = env.match(/GEMINI_API_KEY=(.*)/)[1].trim();

const genAI = new GoogleGenerativeAI(key);

async function check() {
    try {
        // Try text-embedding-004 with v1
        const model = genAI.getGenerativeModel({ model: "text-embedding-004" }, { apiVersion: 'v1' });
        const result = await model.embedContent("test");
        console.log("SUCCESS with text-embedding-004 (v1)");
    } catch (e) {
        console.log("FAILED with text-embedding-004 (v1):", e.message);
    }

    try {
        // Try embedding-001 with v1
        const model = genAI.getGenerativeModel({ model: "embedding-001" }, { apiVersion: 'v1' });
        const result = await model.embedContent("test");
        console.log("SUCCESS with embedding-001 (v1)");
    } catch (e) {
        console.log("FAILED with embedding-001 (v1):", e.message);
    }
}

check();
