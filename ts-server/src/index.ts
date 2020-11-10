export { };
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const PORT = process.env.PORT || 5000;
const path = require("path");
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json());
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/user', require('./routes/dashboard'));
app.use('/api/nutrition', require('./routes/nutrition'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build/")))
    app.get('*', (request: any, response: any) => {
        response.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    });
}