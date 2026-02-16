import passport from "./passport";

export function initPassport(req) {
    return new Promise((resolve, reject) => {
        passport.initialize()(req, {}, resolve);
    });
}
