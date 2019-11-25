var liveServer = require("live-server");

var params = {
  port: 8182,
  host: "0.0.0.0",
  open: true,
  wait: 500,
  logLevel: 2,
  middleware: [function(req, res, next) { next(); }]
};

liveServer.start(params);
