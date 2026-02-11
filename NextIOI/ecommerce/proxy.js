import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

// export default  function proxy(req){
//     let age = Number(req.nextUrl.searchParams?.get('age'));
//     console.log(age);
//     if(age > 18){
//         return Response.redirect('https://www.goelaadhaar.live/', 302);
//     }

//     const token =  req.cookies.get('token')?.value; // ← Use 'auth-token' (same as login)
//     console.log('Token found:', token ? 'Yes ✅' : 'No ❌');
//     console.log('token:: ', token);

//     if(!token){
//         return NextResponse.redirect('localhost:3000/login', 302);
//     }

//     const payload = verifyToken(token);

//     if(!payload){
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     // if(payload.role != 'admin'){
//     //     console.log('No admin access... ');
//     //     return NextResponse.redirect('http://localhost:3000/login', 302);
//     // }
    
// }




import { NextRequest } from "next/server";
import { ratelimit } from "./lib/redis";
// import  {ratelimit}  from "@lib/redis";

export async function proxy(req){
    const ip =
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        "anonymous";

    const { success, limit, remaining, reset } = await ratelimit.limit(ip);
        // await ratelimit.limit(ip);

    if (!success) {
        return NextResponse.json(
            { error: "Too many requests" },
            { status: 429 }
        );
    }
    // Your normal logic here
    return NextResponse.json({ message: "Request successful" });
}

export const config = {
    matcher : ['/api/:path*']
}
