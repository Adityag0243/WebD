// import { NextResponse } from "next/server";
// import { verifyToken } from "@/lib/auth";

// export  function middleware(request){
//     console.log('coming here for auth....  ');
    
//     // const token = await request.cookies.get('token');
//     const token =  request.cookies.get('token');
//     console.log('Inside middle to check token which is :: ', token);
    
//     if(!token){
//         return NextResponse.redirect(new URL('/login',  request.url));
//     }

//     const isValid = verifyToken(token);

//     if(!isValid){
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     console.log('token is valid...');
    
// }

// export const config = {
//     matcher: [ '/admin/:path*','/admin/users' ,'/dashboard/:path*', '/profile/:path*']
// }


// middleware/auth.middleware.js
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(request) {
    const path = request.nextUrl.pathname;
    console.log('🔐 Middleware running for path:', path);
    
    // Get token from cookies
    const token = request.cookies.get('auth-token')?.value; // ← Use 'auth-token' (same as login)
    console.log('Token found:', token ? 'Yes ✅' : 'No ❌');
    
    if (!token) {
        console.log('❌ No token, redirecting to login');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Verify token
    const decoded = verifyToken(token);
    console.log('Token valid:', decoded ? 'Yes ✅' : 'No ❌');
    
    if (!decoded) {
        console.log('❌ Invalid token, redirecting to login');
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('auth-token'); // Clear invalid cookie
        return response;
    }

    console.log('✅ Token is valid, allowing access');
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',      // Matches /admin, /admin/users, /admin/products, etc.
        '/dashboard/:path*',  // Matches /dashboard and all sub-routes
        '/profile/:path*',    // Matches /profile and all sub-routes
    ]
}