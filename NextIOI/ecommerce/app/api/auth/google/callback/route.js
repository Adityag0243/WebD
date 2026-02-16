import jwt from "jsonwebtoken";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    // Handle OAuth error
    if (error || !code) {
        return Response.redirect("http://localhost:3000/login?error=true");
    }

    try {
        // Exchange authorization code for tokens
        const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: `${request.nextUrl.origin}/api/auth/google/callback`,
                grant_type: "authorization_code",
            }),
        });

        if (!tokenResponse.ok) {
            throw new Error("Failed to exchange code for tokens");
        }

        const tokens = await tokenResponse.json();
        const accessToken = tokens.access_token;

        // Fetch user profile
        const profileResponse = await fetch(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (!profileResponse.ok) {
            throw new Error("Failed to fetch user profile");
        }

        const profile = await profileResponse.json();

        // Extract user info
        const user = {
            googleId: profile.id,
            email: profile.email,
            name: profile.name,
            avatar: profile.picture,
        };

        // 🔹 TODO: DB logic
        // 1. Find user by googleId or email
        // 2. If not found → create new user
        // 3. Update user info if needed

        // 🔐 Create JWT
        const token = jwt.sign(
            {
                email: user.email,
                name: user.name,
                googleId: user.googleId,
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        const response = Response.redirect("http://localhost:3000/dashboard");

        response.headers.set(
            "Set-Cookie",
            `token=${token}; HttpOnly; Path=/; Max-Age=604800`
        );

        return response;
    } catch (err) {
        console.error("Google OAuth error:", err);
        return Response.redirect("http://localhost:3000/login?error=true");
    }
}
