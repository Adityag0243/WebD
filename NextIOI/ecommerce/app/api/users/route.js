import { connectToDatabase } from "@/db/db.config";
import { User } from "@/model/user.model";
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET(request) {
  connectToDatabase();
  try{
    console.log("Inside the GET")
    const result = await User.find({});
    return NextResponse.json(result)
  } catch(error){
    console.error(error);
    return NextResponse.json({ Message: error })
  }
}

// export async function POST(request) {
//   connectToDatabase();  
//   const reqBody = await request.json();
//   try {
//     console.log("Inside the POST")
//     const newUser = new User(reqBody);
//     const savedUser = await newUser.save();
//     return NextResponse.json(savedUser);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: error });
//   }
// }