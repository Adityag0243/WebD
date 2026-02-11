import pool from "@/lib/db";
import { NextResponse } from "next/server";

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


export async function PATCH(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        let index = 1;
        let fields = [];
        let values = [];

        for (const key in body) {
            fields.push(`${key} = $${index}`);
            values.push(body[key]);
            index++;
        }
        values.push(id);

        const res = await pool.query(`update products set ${fields.join(', ')} where id = $${index}`, values);
        return NextResponse.json({ message: 'Product updated successfully' });

    }
    catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        console.log(id);

        const res = await pool.query('delete from products where id = $1 returning *', [id]);
        return NextResponse.json({ message: res.rowCount > 0 ? 'Product deleted successfully' : 'Product not found', data: res.rows[0] });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error.message });
    }
}
