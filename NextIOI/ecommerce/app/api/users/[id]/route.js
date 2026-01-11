import pool from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request, { params }) {

    const { id } = await params;
    try {
        console.log(id);
        const result = await pool.query("select * from users where id = $1", [id])
        return NextResponse.json(result.rows)
    }
    catch (error) {
        return NextResponse.json({ Message: error })
    }
}