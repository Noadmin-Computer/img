const route = require("express").Router();

const usersHandler = require("../handler/users.handler");

route.get("/", usersHandler.GET);

module.exports = route;
