// app/api/recommend/route.js
import { getVector } from '@/lib/embedder';
import { createClient } from '@supabase/supabase-js';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function POST(req) {
  const { query } = await req.json();

  // 1. Generate embedding for the user query
  const queryVector = await getVector(query);

  // 2. Search Supabase for similar products
  // 'match_products' is a Postgres function you create in Supabase
  const { data: products } = await supabase.rpc('match_products', {
    query_embedding: queryVector,
    match_threshold: 0.5,
    match_count: 3,
  });

  // 3. Use Groq to explain why these were picked
  const productContext = products.map(p => `${p.name}: ${p.description}`).join('\n');
  
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful e-commerce assistant. Based on the products found, explain why they fit the user's request. Keep it short." },
      { role: "user", content: `User query: ${query}\n\nProducts found:\n${productContext}` }
    ],
    model: "llama-3.3-70b-versatile",
  });

  return Response.json({
    explanation: chatCompletion.choices[0].message.content,
    products
  });
}