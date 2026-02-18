import { supabase } from "@/lib/supabase";
import { getEmbedding, getChatResponse } from "@/lib/gemini";
import { NextResponse } from "next/server";

/**
 * POST /api/chat
 * Supabase-powered chatbot with vector embeddings
 * Request body: { question: string }
 * Response: { answer: string, products: Array }
 */
export async function POST(req) {
  try {
    const { question } = await req.json();

    if (!question || question.trim() === "") {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    console.log("User question:", question);

    // Step 1: Generate embedding for the user's question
    console.log("Generating embedding from question...");
    const embedding = await getEmbedding(question);
    console.log("Embedding generated successfully");

    // Step 2: Search Supabase for similar products using vector similarity
    console.log("Searching Supabase for similar products...");
    const { data: products, error: searchError } = await supabase
      .rpc("match_products", {
        query_embedding: embedding,
        match_count: 3,
        min_similarity: 0.5
      });

    if (searchError) {
      console.error("Supabase search error:", searchError);
      return NextResponse.json(
        {
          error: "Failed to search products",
          details: searchError.message
        },
        { status: 500 }
      );
    }

    console.log(`Found ${products?.length || 0} matching products`);

    // Step 3: Generate AI response with Gemini
    const answer = await getChatResponse(question, products || []);

    return NextResponse.json({
      answer,
      products: products || [],
      count: products?.length || 0
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process your question",
        details: error.message
      },
      { status: 500 }
    );
  }
}
