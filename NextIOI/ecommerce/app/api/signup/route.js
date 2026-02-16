import { connectToDatabase } from "@/db/db.config";
import { User } from "@/model/user.model";
import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/validators/user";


export const runtime = "nodejs";

export async function POST(request) {
    console.log('\n========================================');
    console.log('🚀 SIGNUP API ROUTE HIT!', new Date().toISOString());
    console.log('========================================\n');

    try {
        console.log('📡 Connecting to database...');
        await connectToDatabase();
        console.log('✅ Database connected');

        const reqBody = await request.json();
        console.log('📦 Request body received:', JSON.stringify(reqBody, null, 2));

        // Validate the request body
        const validatedData = signupSchema.parse(reqBody);

        console.log("Creating user with validated data");

        // Check if user already exists
        const existingUser = await User.findOne({ email: validatedData.email });
        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User with this email already exists",
                },
                { status: 409 }
            );
        }

        // Create user with validated data
        let user = await User.create(validatedData);

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            data: {
                id: user._id,
                email: user.email,
                full_name: user.full_name
            }
        });

    } catch (error) {
        console.error('Signup error:', error);

        // Handle Zod validation errors
        if (error.name === 'ZodError') {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message
                    })),
                },
                { status: 400 }
            );
        }

        // Handle MongoDB duplicate key error
        if (error.code === 11000) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User with this email already exists",
                },
                { status: 409 }
            );
        }

        // Generic error response
        return NextResponse.json(
            {
                success: false,
                message: error.message || "An error occurred during registration",
            },
            { status: 500 }
        );
    }
}