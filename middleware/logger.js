function log(req, res, next) {
  console.log("Logging...");
  next();
}

exports.log = log;
