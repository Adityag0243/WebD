import { NextResponse } from "next/server";
import { connectToDatabase } from "@/db/db.config";
import { Product } from "@/model/product.model";

export const runtime = "nodejs";

// GET /api/product/[id]
export async function GET(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = await params;
        const product = await Product.findById(id);
        console.log("id  : ", id);
        

        if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PATCH /api/product/[id]
export async function PATCH(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = params;
        const body = await request.json();

        const updatedProduct = await Product.findByIdAndUpdate(id, body, {
        new: true, // return updated doc
        runValidators: true, // enforce schema validation
        });

        if (!updatedProduct) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({
        message: "Product updated successfully",
        data: updatedProduct,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE /api/product/[id]
export async function DELETE(request, { params }) {
    try {
        await connectToDatabase();
        const { id } = params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({
        message: "Product deleted successfully",
        data: deletedProduct,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}