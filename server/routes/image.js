const express = require("express");
// const multer = require("multer");
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
const router = express.Router();
const upload = require("../utils/upload");
const imageController = require("../controllers/image_controller");
router.post("/upload", upload.single("file"), imageController.image);

module.exports = router;
