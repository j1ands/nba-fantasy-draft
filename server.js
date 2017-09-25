const express = require("express");
const server = express();

server.get("*", function (req, res) {
  res.send("Hello World!")
});

server.listen(5000, function () {
  console.log("Example app listening on port 5000!")
});
