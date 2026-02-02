const passport = require("passport");
const User = require("../model/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


passport.use(
new GoogleStrategy(
{
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "/auth/google/callback",
},
async (accessToken, refreshToken, profile, done) => {
    try {
    // 1. Check if user exists
    let user = await User.findOne({ googleId: profile.id });

    // 2. If not, create user
    if (!user) {
            user = await User.create({
            googleId: profile.id,
            email:  profile.emails?.[0]?.value ||
  `${profile.id}@google-oauth.local`,
            avatar: profile.photos[0].value,
            full_name: profile.displayName,
            provider: "google",
        });
    }

    return done(null, user);
    } catch (err) {
    return done(err, null);
    }
}
)
);

