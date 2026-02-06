const shortid = require("shortid");
const Url = require("../12_models/Url");

// create short url
exports.createShortUrl = async (req, res) => {
  const shortUrl = shortid.generate();

  const url = new Url({
    originalUrl: req.body.originalUrl,
    shortUrl: shortUrl
  });

  await url.save();

  res.json({
    originalUrl: req.body.originalUrl,
    shortUrl: shortUrl
  });
};

// get all urls
exports.getAllUrls = async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
};