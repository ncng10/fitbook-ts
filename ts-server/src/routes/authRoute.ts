export { };
const router = require("express").Router();
const pool = require('../db');
var bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const validInfo = require('../middleware/validinfo');
const authorization = require("../middleware/authorization");

router.post('/register', validInfo, async (req: any, res: any) => {
    try {
        const { email, username, password } = req.body;
        const user = await pool.query(
            "SELECT * FROM users WHERE user_email =$1", [
            email
        ]);
        //password hashing via bcrypt
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES($1,$2,$3) RETURNING * ", [
            username, email, bcryptPassword
        ]);
        const token = jwt(newUser.rows[0].user_id);
        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists");
        }
        return res.json({ token })
    } catch (err) {
        console.log(err)
        res.status(500).send("Email and/or Username already exists.");
    }
});

router.post('/login', validInfo, async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ]);
        if (user.rows.length === 0) {
            return res.status(401).json('Password and/or email is incorrect does not exist')
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        if (!validPassword) {
            return res.status(401).json('Password and/or email is incorrect');
        }
        const token = jwt(user.rows[0].user_id);
        res.json({ token })

    } catch (err) {
        console.log(err.message)
    }
});

router.get('/is-verified', authorization, (_req: any, res: any) => {
    try {
        res.json(true);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;