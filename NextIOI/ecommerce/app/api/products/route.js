import pool from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get('search') || '';
        const page_no = searchParams.get('page_no') || 1;
        const page_size = searchParams.get('page_size') || 20;
        const category = searchParams.get('category') || '';
        const sort = searchParams.get('sort') || 'price';
        const offset = (page_no - 1) * page_size;

        const res = await pool.query(
            'select * from products where name ilike $1  order by $2 limit $3 offset $4', [(`%${search}%`), sort, page_size, offset]);

        return NextResponse.json(res.rows);
    }
    catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message });
    }
}
