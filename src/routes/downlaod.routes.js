const route = require("express").Router();

const downloadHandler = require("../handler/download.handler");

route.get("/", downloadHandler.GET);

module.exports = route;
