const express = require("express");
let userRoutes = require('./routes/userRoutes');
const app = express();
require("dotenv").config();
require("./db"); //to connect to the database

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

app.use("/api/users", userRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});