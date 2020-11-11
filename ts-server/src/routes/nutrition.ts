export { };

const authorization = require("../middleware/authorization");
const router = require("express").Router();
const pool = require('../db');
import { Request, Response } from 'express';
router.post('/entry', authorization, async (req: Request, res: Response) => {
    try {
        const { calories, protein, carbs, fats } = req.body
        //req.user has payload
        const entry = await pool.query('INSERT INTO nutrition (user_id,entry_calories, entry_protein, entry_carbs, entry_fats) VALUES($1,$2,$3,$4,$5)', [
            (req as any).user, calories, protein, carbs, fats
        ])
        res.json(entry.rows);

    } catch (err) {
        console.log(err.message);
        res.status(500).json("Server Error");
    }
});

router.get('/nutrition-data', authorization, async (req: any, res: any) => {
    try {
        const getData = await pool.query(
            "SELECT * FROM nutrition WHERE user_id = $1", [
            (req as any).user
        ])
        res.json(getData.rows)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;