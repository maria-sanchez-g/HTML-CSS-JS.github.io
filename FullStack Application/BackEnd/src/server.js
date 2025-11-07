// src/server.js
// Purpose: Start the server and listen on a port.

const app = require("./app");

const PORT = 3000; // You can change this number if needed

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
