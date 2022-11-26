const GET = (req, res) => {
  let users = req.readFile("users");
  return res.json(users);
};

module.exports = {
  GET,
};
