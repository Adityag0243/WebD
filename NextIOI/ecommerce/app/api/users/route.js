import pool from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// api/users
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const page_no = searchParams.get("page_no") || 1;
  const page_size = searchParams.get("page_size") || 5;
  try {
    console.log("Inside the GET")
    const result = await pool.query("select * from users limit $1 offset $2", [page_size, (page_no - 1) * page_size])
    return NextResponse.json(result.rows)
  }
  catch (error) {
    console.error(error);
    return NextResponse.json({ Message: error })
  }
}



