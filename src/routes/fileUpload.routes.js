const router = require('express').Router()

const fileUploadHandler = require('../handler/fileUpload.handler')
router.route('/')
    .post(fileUploadHandler.POST)

module.exports = router