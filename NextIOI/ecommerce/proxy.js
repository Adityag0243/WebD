import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

import { NextRequest } from "next/server";
import { ratelimit } from "./lib/redis";
// import  {ratelimit}  from "@lib/redis";

export async function proxy(req) {
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

    // ✅ Continue to the actual API route
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*']
}
