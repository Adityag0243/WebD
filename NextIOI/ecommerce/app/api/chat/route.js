import { supabase } from "@/lib/supabase";
import { getEmbedding, getChatResponse, classifyIntent, getOrderResponse } from "@/lib/gemini";
import { getUserOrders } from "@/lib/orders";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

/**
 * POST /api/chat
 * Agentic Chatbot for Products and Orders
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

    // Step 1: Classify Intent
    const intent = await classifyIntent(question);
    console.log("Identified intent:", intent);

    // Step 2: Agent Routing
    if (intent === 'order') {
      // --- ORDER AGENT ---
      console.log("Routing to Order Agent...");

      // Get user from cookie
      const cookieStore = await cookies();
      const token = cookieStore.get("auth-token")?.value;
      console.log("Token:", token);

      let user = null;
      if (token) {
        try {
          // Decode token to get user info (email/googleId)
          // Note: In production, verify the token signature
          user = jwt.decode(token);
        } catch (e) {
          console.error("Token decode error:", e);
        }
      }

      if (!user) {
        return NextResponse.json({
          answer: "I can help with your orders, but you need to be logged in first. Please log in to view your order history.",
          products: [],
          intent: 'order'
        });
      }

      // Fetch oders using email or googleId
      const userId = user.email || user.googleId;
      const orders = await getUserOrders(userId);
      const answer = await getOrderResponse(question, orders);

      return NextResponse.json({
        answer,
        products: [], // Frontend expects this array
        intent: 'order'
      });

    } else if (intent === 'product' || intent === 'general') {
      // --- PRODUCT AGENT ---
      console.log("Routing to Product Agent...");

      // Only search for products if intent is explicitly 'product' 
      // OR if it's 'general' but might benefit from context (optional, but let's keep it simple: search if 'product')

      let products = [];

      if (intent === 'product') {
        // Generate embedding
        const embedding = await getEmbedding(question);

        // Search Supabase
        const { data, error: searchError } = await supabase
          .rpc("match_products", {
            query_embedding: embedding,
            match_count: 3,
            min_similarity: 0.5
          });

        if (!searchError) {
          products = data || [];
        } else {
          console.error("Supabase search error:", searchError);
        }
      }

      // For 'general', we pass empty products, or maybe we want to allow vector search for general too? 
      // The previous logic always searched. Let's keep it robust: 
      // If intent is 'general', we skip search to save resources, UNLESS the model got it wrong.
      // But let's trust the classifier for now.

      const answer = await getChatResponse(question, products);

      return NextResponse.json({
        answer,
        products: products,
        count: products.length,
        intent: 'product'
      });
    }

    return NextResponse.json({
      answer: "I'm not sure how to help with that yet.",
      products: []
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
