const express = require('express');
const path = require("path");

const app = express();

// Serve frontend
app.use(express.static(path.join(__dirname, "../client")));

app.get("/api/test", (req, res) => {
  res.json({ message: "Server works!" });
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});