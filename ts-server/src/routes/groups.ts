export { }
const authorization = require("../middleware/authorization");
const router = require("express").Router();
const pool = require('../db');
import { Request, Response } from 'express';

router.post('/create-a-group', authorization, async (req: Request, res: Response) => {
    try {
        const { groupName } = req.body;
        const createAGroup = await pool.query(
            'INSERT INTO groups (group_name, user_id) VALUES($1,$2)', [
            groupName, (req as any).user
        ])
        res.json(createAGroup)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;