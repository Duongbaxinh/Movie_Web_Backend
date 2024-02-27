const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:8080/api/v1/auth/google/callback",
    passReqToCallback: true,
},
    function (request: any, accessToken: any, refreshToken: any, profile: any, cb: any) {
        return cb(null, profile)
    }
));
passport.serializeUser(function (profile: any, db: any) {
    db(null, profile);
});
passport.deserializeUser((profile: any, cb: any) =>
    cb(null, profile)
);