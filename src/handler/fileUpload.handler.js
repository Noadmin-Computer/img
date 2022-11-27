const { log } = require("console");
const path = require("path");

const POST = (request, response) => {
  const { file } = request.files;
  console.log(request);
  const fileName = new Date().getTime() + ".jpeg";
  const filePath = path.resolve(process.cwd(), "uploads", fileName);
  file.mv(filePath);
  request.writeFile("images", fileName)
  response.json({
    message: "The file has been succefully uploaded!",
    data: fileName,
  });
  console.log(request);

};


module.exports = {
  POST,
};

