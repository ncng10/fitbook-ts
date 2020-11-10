export { };
const authorization = require("../middleware/authorization");
const router = require("express").Router();
const pool = require('../db');
import { Request, Response } from 'express';
router.get('/dashboard', authorization, async (req: Request, res: Response) => {
    try {
        //req.user has payload
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [
            (req as any).user
        ])
        res.json(user.rows[0]);

    } catch (err) {
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;