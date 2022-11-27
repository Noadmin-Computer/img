const GET = (req, res) => {
    let images = req.readFile("images");
    return res.json(images);
  };
  
  module.exports = {
    GET,
  };
  