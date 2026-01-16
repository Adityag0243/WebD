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


export async function POST(request) {
    try {
        const { name, price, stock, image, category, description } = await request.json();
        if (!name || !price || !stock) {
            return NextResponse.json({ error: "All fields are required" });
        }
        const res = await pool.query('insert into products (name, price, stock, image, category, description) values ($1, $2, $3, $4, $5, $6) returning *', [name, price, stock, image, category, description]);
        return NextResponse.json({ message: 'Product added successfully', data: res.rows[0] });
    }
    catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();
        console.log(id);
        const res = await pool.query('delete from products where id = $1 returning *', [id]);
        return NextResponse.json({ message: 'Product deleted successfully' })
    }
    catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message })
    }
}