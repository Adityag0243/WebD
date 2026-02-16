// app/api/products/recommended/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db/db.config";
// import { Product } from "@/models/Product";
import { Product } from "@/model/product.model";

export async function GET() {
  await connectToDatabase();

  // Example: fetch 4 random products
  const products = await Product.aggregate([{ $sample: { size: 4 } }]);

  return NextResponse.json({ products });
}