export { };
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: 'src/.env' });
let secret_key = process.env.SECRET_KEY;
import { Request, Response, NextFunction } from 'express';

module.exports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtToken = req.header("token");
        if (!jwtToken) {
            return res.status(403).json("Not authorized");
        }
        const payload = jwt.verify(jwtToken, secret_key);
        (req as any).user = payload.user

    } catch (err) {
        console.log(err.message)
        return res.status(403).json("Not authorized");
    }
    next();
}