const authRouter = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

// Step 1: Redirect user to Google
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// Step 2: Google callback
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const user = req.user;

    // Create ONE access token
    const token = jwt.sign({email:user.email, role : user.role}, "123Aditya")

    // Option 1: redirect with token
    res.redirect(
      `http://localhost:3000/home`
    );

    // Option 2: send JSON (for mobile apps)
    // res.json({ token });
  }
);

module.exports = authRouter;
