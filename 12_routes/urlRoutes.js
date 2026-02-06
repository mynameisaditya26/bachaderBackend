const express = require("express");
const shortid = require("shortid");
const Url = require("../11_models/Url");

const router = express.Router();

/**
 * Create Short URL
 */
router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "URL is required" });
    }

    const shortUrl = shortid.generate();

    const newUrl = new Url({
      originalUrl,
      shortUrl
    });

    await newUrl.save();

    res.status(201).json({
      originalUrl,
      shortUrl: `http://localhost:3000/${shortUrl}`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Redirect to Original URL
 */
router.get("/:shortUrl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
