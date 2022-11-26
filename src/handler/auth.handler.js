const path = require("path");
const sha256 = require("sha256");
const jwt = require("jsonwebtoken");

const LOGIN = (req, res) => {
  const { name, password } = req.body;

  const users = req.readFile("users");

  let [user] = users.filter(
    (el) => el.name === name && el.password === sha256(password)
  );

  if (!user) {
    return res.json({
      status: 401,
      message: "The user is not registered!",
    });
  }
  const token = jwt.sign(user, "NEW_USER");

  return res.json({
    status: 200,
    message: "The user has been successfully logged in.",
    token,
  });
};

const REGISTER = (req, res) => {
  const { name, age, gender, password } = req.body;
  const users = req.readFile("users");

  const newUserParams = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    age,
    gender,
    password: sha256(password),
  };
  users.push(newUserParams);
  const token = jwt.sign(newUserParams, "NEW_USER");
  console.log(users);
  req.writeFile("users", users);

  res.json({
    status: 200,
    message: "The user successfully registered!",
    token,
  });
};

module.exports = {
  LOGIN,
  REGISTER,
};
