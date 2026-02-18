import pool from "@/lib/db";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db/db.config";
import { Product } from "@/model/product.model";
export const runtime = "nodejs";


export async function GET(request) {
    try {
        await connectToDatabase();

        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get("search") || "";
        const page_no = parseInt(searchParams.get("page_no")) || 1;
        const page_size = parseInt(searchParams.get("page_size")) || 20;
        const category = searchParams.get("category") || "";
        const sort = searchParams.get("sort") || "createdAt"; // use schema field names

        const offset = (page_no - 1) * page_size;

        // Build query object
        const query = {};
        if (search) {
            query.name = { $regex: search, $options: "i" }; // case-insensitive search
        }
        if (category) {
            query.category = category;
        }

        // Fetch products
        const products = await Product.find(query)
            .sort({ [sort]: -1 }) // descending sort
            .skip(offset)
            .limit(page_size);

        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message });
    }
}


// export async function POST(request) {
//     console.log("trying to add0..... ");

//     try {
//         console.log("trying to add..... ");

//         const { name, price, stock, image, category, description } = await request.json();
//         if (!name || !price || !stock) {
//             return NextResponse.json({ error: "All fields are required" });
//         }
//         // const res = await pool.query('insert into products (name, price, stock, image, category, description) values ($1, $2, $3, $4, $5, $6) returning *', [name, price, stock, image, category, description]);
//         // return NextResponse.json({ message: 'Product added successfully', data: res.rows[0] });
//         // const res = await pool.query(
//         //     'INSERT INTO products (name, price, stock, image, category, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//         //     [name, price, stock, image || null, category || null, description || null]
//         //     );
//         // console.log("Inserted row:", res.rows[0]);
//         // return NextResponse.json({ message: 'Product added successfully', data: res.rows[0] });
//         const savedProduct = await product.save();
//         return NextResponse.json({
//             message: "Product added successfully",
//             data: savedProduct,
//         });


//     }
//     catch (error) {
//         console.error(error)
//         return NextResponse.json({ error: error.message });
//     }
// }

import { supabase } from "@/lib/supabase";
import { getEmbedding } from "@/lib/gemini";

export async function POST(request) {
    console.log("Trying to add product...");
    try {
        await connectToDatabase();
        const { name, price, stock, image, category, description, rating } =
            await request.json();

        if (!name || !price || stock === undefined) {
            return NextResponse.json({ error: "Name, price, and stock are required" }, { status: 400 });
        }

        // Create MongoDB product
        const product = new Product({
            name,
            price,
            stock,
            image,
            category,
            description,
            rating: rating || 0
        });

        const savedProduct = await product.save();

        // Generate embedding for Supabase vector search
        console.log("Generating embedding for product...");
        const embeddingText = `${name} ${category || ''} ${description || ''}`;
        const embedding = await getEmbedding(embeddingText);

        // Store in Supabase with embedding
        console.log("Storing product in Supabase with embedding...");
        const { data: supabaseProduct, error: supabaseError } = await supabase
            .from("products")
            .insert({
                mongo_id: savedProduct._id.toString(),
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                stock: product.stock,
                image: product.image,
                rating: product.rating,
                is_active: product.is_active,
                embedding
            })
            .select()
            .single();

        if (supabaseError) {
            console.error("Supabase insert error:", supabaseError);
            // Product is still saved in MongoDB, just log the error
            console.warn("Product saved to MongoDB but failed to sync to Supabase");
        } else {
            console.log("Product successfully stored in Supabase with ID:", supabaseProduct.id);
        }

        return NextResponse.json({
            message: "Product added successfully",
            data: savedProduct,
            supabase_synced: !supabaseError
        });
    } catch (error) {
        console.error("Product creation error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
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