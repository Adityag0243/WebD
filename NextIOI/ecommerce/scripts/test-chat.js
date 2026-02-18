import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const env = fs.readFileSync('.env', 'utf8');
const key = env.match(/GEMINI_API_KEY=(.*)/)[1].trim();

const genAI = new GoogleGenerativeAI(key);

async function testChat() {
    try {
        console.log("Testing with gemini-1.5-flash...");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hi");
        console.log("SUCCESS! Response:", result.response.text());
    } catch (e) {
        console.log("FAILED with gemini-1.5-flash:", e.message);

        try {
            console.log("Testing with gemini-flash-latest...");
            const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
            const result = await model.generateContent("Hi");
            console.log("SUCCESS! Response:", result.response.text());
        } catch (e2) {
            console.log("FAILED with gemini-flash-latest:", e2.message);
        }
    }
}

testChat();
