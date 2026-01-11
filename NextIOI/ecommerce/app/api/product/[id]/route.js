import pool from '@lib/db'
import { NextResponse } from 'next/server'

export const runtime = "nodejs";

// get product by id

// api/product/1
export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const res = await pool.query('select * from products where id = $1', [id]);
        return NextResponse.json(res.rows);
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message });
    }
}
