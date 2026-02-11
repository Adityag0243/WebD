import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Create Redis client
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL ?? "1",
    token: process.env.UPSTASH_REDIS_REST_TOKEN ?? "1",
});

// Create rate limiter
export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "60 s"), 
    // 10 requests per 60 seconds
    analytics: true,
});