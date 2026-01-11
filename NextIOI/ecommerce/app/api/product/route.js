import pool from "@lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// api/product
// product?search = keyword & page_no = 1 & page_size = 5 & category_id = 1 & brand_id = 1 & sort = price_asc
export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get('search') || '';
        const page_no = searchParams.get('page_no') || 1;
        const page_size = searchParams.get('page_size') || 5;
        const category_id = searchParams.get('category_id') || 0;
        const brand_id = searchParams.get('brand_id') || 0;
        const sort = searchParams.get('sort') || 'price';
        const offset = (page_no - 1) * page_size;

        const res = await pool.query(
            'select * from products where product_name ilike $1 and category_id = $2 and brand_id = $3 order by $4 limit $5 offset $6', [(`%${search}%`), category_id, brand_id, sort, page_size, offset]);

        return NextResponse.json(res.rows);
    }
    catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message });
    }
}
