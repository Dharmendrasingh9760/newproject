const express = require("express");
const app = express();
const port = 5000;

// Handle root
app.get("/", (req, res) => res.send("Hello from Node.js Backend"));

// Handle /api
app.get("/api", (req, res) => res.send("Hello from /api route via NGINX"));

app.listen(port, () => console.log(`App running on port ${port}`));
