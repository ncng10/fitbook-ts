const jwt = require("jsonwebtoken");
require("dotenv").config({ path: 'src/.env' }); //path relatvie to dotenv
let secret_key = process.env.SECRET_KEY
function jwtGenerator(user_id: number) {
    const payload = {
        user: user_id
    }
    return jwt.sign(payload, secret_key, { expiresIn: "2h" });
}

module.exports = jwtGenerator;