import mongoose from "mongoose";

let productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            enum: ["electronics", "clothing", "food", "books","homedecor", "other"],
            default: "other",
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },
        image: {
            type: String,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

export const Product =
mongoose.models.Product || mongoose.model("Product", productSchema);