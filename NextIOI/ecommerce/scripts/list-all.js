import fs from "fs";

const env = fs.readFileSync('.env', 'utf8');
const key = env.match(/GEMINI_API_KEY=(.*)/)[1].trim();

async function listAll() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.models.forEach(m => {
            console.log(m.name);
        });
    } catch (e) {
        console.error(e);
    }
}

listAll();
