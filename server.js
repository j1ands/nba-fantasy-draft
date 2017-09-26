const express = require("express");
const server = express();

server.set("port", (process.env.PORT || 5000));

server.get("*", function (req, res) {
  res.send("Hello Jordan!")
});

server.listen(server.get("port"), function () {
  console.log("Example app listening on port ", server.get("port"));
});
