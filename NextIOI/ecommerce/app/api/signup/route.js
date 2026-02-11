import { connectToDatabase } from "@/db/db.config";
import { User } from "@/model/user.model";
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(request){
    console.log('here... ');
    connectToDatabase();
    console.log('connectedd.... ');
    const reqBody = await request.json();
    try{
        console.log("Inside the POST")
        // Here you can add validation for reqBody if needed
        let user = await User.create(reqBody);
        return NextResponse.json({Message: "User created successfully", user});
    } catch(error){
        console.error(error);
        return NextResponse.json({ Message: error });
    }
}