import { connectToDatabase } from "@/db/db.config";
import { User } from "@/model/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signupSchema } from "@/lib/validators/user";
import { cookies } from 'next/headers';
export const runtime = "nodejs";

export async function POST(request) {
    console.log('🔐 Coming in login..');

    try {
        await connectToDatabase();
        console.log('✅ Connected to DB');

        const reqBody = await request.json();
        console.log('📧 Login attempt for:', reqBody.email);
        let { email, password } = reqBody;
        const validatedData = signupSchema.parse(reqBody);
        let user = await User.findOne({ email }).select("+password");
        if (!user || !user.password) {
            return NextResponse.json({ Message: "Invalid email or password" }, { status: 401 });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ Message: "Invalid password" }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role, age: user.age },
            process.env.JWT_SECRET || "123Aditya",
            { expiresIn: "1d" }
        );
        // ✅ Attach cookie to response
        const response = NextResponse.json({
            message: "Login successful",
        });
        response.cookies.set("auth-token", token, {
            httpOnly: true
        });
        return response;
    }
    catch (error) {
        console.error(error);
        return NextResponse.json(
            { Message: error.message || "Login failed" },
            { status: 400 }
        );
    }
}


//   --->   