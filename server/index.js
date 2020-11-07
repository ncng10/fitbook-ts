const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const PORT = process.env.PORT || 5000;
const path = require("path");
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/user', require('./routes/dashboard'));
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build/")))
    app.get('*', (request, response) => {
        response.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    });
}