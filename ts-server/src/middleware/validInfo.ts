import { Request, Response, NextFunction } from 'express';

module.exports = function (req: Request, res: Response, next: NextFunction) {
    const { email, username, password } = req.body;

    function validEmail(userEmail: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === "/register") {
        if (![email, username, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials1");
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }

    } else if (req.path === "/login") {
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials2");
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    }

    next();
};