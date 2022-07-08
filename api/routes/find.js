const router = require("express").Router();
const findBrokenLinks = require("../scraping/BrokenLinksFinder");

router.get("/", async (req, res) => {
  const url = req.query.link;
  try {
    const blf = await findBrokenLinks(url);
    console.log(blf);
    return res.send([...blf].join(" "));
    console.log("done");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
