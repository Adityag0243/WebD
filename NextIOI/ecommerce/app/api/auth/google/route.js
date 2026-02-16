export async function GET(request) {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = `${request.nextUrl.origin}/api/auth/google/callback`;

    // Build Google OAuth URL
    const googleAuthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
    googleAuthUrl.searchParams.set("client_id", clientId);
    googleAuthUrl.searchParams.set("redirect_uri", redirectUri);
    googleAuthUrl.searchParams.set("response_type", "code");
    googleAuthUrl.searchParams.set("scope", "profile email");
    googleAuthUrl.searchParams.set("access_type", "offline");
    googleAuthUrl.searchParams.set("prompt", "consent");

    return Response.redirect(googleAuthUrl.toString());
}
