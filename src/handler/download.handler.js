const download = require("image-downloader");

function downloadImage(name, filepath) {
  return download.image({
    name,
    dest: filepath,
  });
}

module.exports = {
  downloadImage,
};
