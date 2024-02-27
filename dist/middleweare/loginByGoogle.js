"use strict";
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/api/v1/auth/google/callback",
    passReqToCallback: true,
}, function (request, accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}));
passport.serializeUser(function (profile, db) {
    db(null, profile);
});
passport.deserializeUser((profile, cb) => cb(null, profile));
