var http = require("http");

var server = http.createServer(function (req, res) {
  res.write("i am keerthi Sai");
  res.write("welcome to the learning");
  res.end();
});

server.listen(3004);
