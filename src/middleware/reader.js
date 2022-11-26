const fs = require("fs");
const path = require("path");

const model = (req, res, next) => {
  req.readFile = function (filename) {
    let file = fs.readFileSync(
      path.resolve(process.cwd(), "data", filename + ".json"),
      "utf-8"
    );
    file = file ? JSON.parse(file) : [];
    return file;
  };

  req.writeFile = function (filename, data) {
    fs.writeFileSync(
      path.resolve(process.cwd(), "data", filename + ".json"),
      JSON.stringify(data, null, 4)
    );
    return true;
  };
  return next();
};

module.exports = model;
