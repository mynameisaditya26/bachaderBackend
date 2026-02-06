const express = require("express");
const {
  createShortUrl,
  getAllUrls
} = require("../12_controllers/urlController");

const router = express.Router();

router.post("/shorten", createShortUrl);
router.get("/urls", getAllUrls);

module.exports = router;