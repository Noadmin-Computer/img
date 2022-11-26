const route = require("express").Router();

const authHandler = require("../handler/auth.handler");

route.post("/login", authHandler.LOGIN);
route.post("/register", authHandler.REGISTER);

module.exports = route;
