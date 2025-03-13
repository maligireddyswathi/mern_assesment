console.log("Server is starting...");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Server for translation is running successfully!");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

