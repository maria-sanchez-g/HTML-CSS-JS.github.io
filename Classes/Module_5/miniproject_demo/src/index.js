const express = require('express');
const app = express();
const port = 5050;

app.use("/", express.static("./public"));

app.listen(port, () => {
    console.log("server is up");
});
