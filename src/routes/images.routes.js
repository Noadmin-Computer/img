const route = require("express").Router();

const imagesHandler = require("../handler/image.handler");

route.get("/", imagesHandler.GET);

module.exports = route;
