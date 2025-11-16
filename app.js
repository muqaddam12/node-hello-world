const express = require("express");
const path = require("path");

const app = express();

// serve static files from /public (same as original template)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello from Muqaddam's Elastic Beanstalk app!");
});

// IMPORTANT: use process.env.PORT (required by EB)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
